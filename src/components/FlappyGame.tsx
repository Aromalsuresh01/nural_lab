import { useEffect, useRef, useState } from 'react';

interface Pipe {
  x: number;
  topHeight: number;
  width: number;
  gap: number;
  passed: boolean;
}

// Global High Score API Config (Dreamlo)
const DREAMLO_PUBLIC_CODE = '67eb83078f40bb116c476722';
const DREAMLO_PRIVATE_CODE = 'Zof8iK87lUGV-gJ9K2Qz9Ati5J6A18-k-fR9AofFjA7g'; // Note: Publicly visible in client-side code, but acceptable for a portfolio easter egg
const WR_USER_ID = 'World_Record';

export default function FlappyGame({ onExit }: { onExit: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [worldRecord, setWorldRecord] = useState<number>(0);
  const [isSyncing, setIsSyncing] = useState(false);

  // Constants
  const GRAVITY = 0.25;
  const JUMP_POWER = -5;
  const PIPE_SPEED = 2;
  const PIPE_SPAWN_RATE = 120;
  const CANVAS_WIDTH = 800;
  const CANVAS_HEIGHT = 400;

  // Global Score Sync
  const fetchWorldRecord = async () => {
    setIsSyncing(true);
    try {
      const response = await fetch(`https://dreamlo.com/lb/${DREAMLO_PUBLIC_CODE}/json`);
      const data = await response.json();
      if (data?.dreamlo?.leaderboard?.entry) {
        const entry = data.dreamlo.leaderboard.entry;
        const topScore = Array.isArray(entry) ? entry[0].score : entry.score;
        setWorldRecord(parseInt(topScore) || 0);
      }
    } catch (e) {
      console.error('Failed to fetch world record:', e);
    } finally {
      setIsSyncing(false);
    }
  };

  const updateWorldRecord = async (newScore: number) => {
    if (newScore <= worldRecord) return;
    setWorldRecord(newScore);
    try {
      await fetch(`https://dreamlo.com/lb/${DREAMLO_PRIVATE_CODE}/add/${WR_USER_ID}/${newScore}`);
    } catch (e) {
      console.error('Failed to update world record:', e);
    }
  };

  useEffect(() => {
    fetchWorldRecord();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Game Variables
    let bird = { x: 100, y: CANVAS_HEIGHT / 2, radius: 10, velocity: 0, color: '#00E639' };
    let pipes: Pipe[] = [];
    let frameCount = 0;
    let localScore = 0;
    let localGameOver = false;
    let animationId: number;

    const resetGame = () => {
      bird = { x: 100, y: CANVAS_HEIGHT / 2, radius: 10, velocity: 0, color: '#00E639' };
      pipes = [];
      frameCount = 0;
      localScore = 0;
      localGameOver = false;
      update();
    };

    // Input Handling
    const GAME_KEYS = [' ', 'ArrowUp', 'w', 'r', 'Enter'];
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (GAME_KEYS.includes(e.key)) e.preventDefault();
      
      if (e.key === 'Escape') onExit();
      
      if (localGameOver) {
        if (e.key.toLowerCase() === 'r' || e.key === 'Enter') {
          cancelAnimationFrame(animationId);
          resetGame();
        }
        return;
      }

      if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w') {
        bird.velocity = JUMP_POWER;
      }
    };

    const handleMouseDown = (e: globalThis.MouseEvent) => {
      e.preventDefault();
      if (localGameOver) {
        cancelAnimationFrame(animationId);
        resetGame();
      } else {
        bird.velocity = JUMP_POWER;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    const update = () => {
      if (localGameOver) return;

      // Physics
      bird.velocity += GRAVITY;
      bird.y += bird.velocity;

      // Pipe Management
      if (frameCount % PIPE_SPAWN_RATE === 0) {
        const gapHeight = 120;
        const minTopHeight = 50;
        const maxTopHeight = CANVAS_HEIGHT - gapHeight - 50;
        const topHeight = Math.floor(Math.random() * (maxTopHeight - minTopHeight + 1)) + minTopHeight;
        pipes.push({ x: CANVAS_WIDTH, topHeight, width: 50, gap: gapHeight, passed: false });
      }

      for (let i = pipes.length - 1; i >= 0; i--) {
        const p = pipes[i];
        p.x -= PIPE_SPEED;

        // Collision
        if (
          bird.x + bird.radius > p.x &&
          bird.x - bird.radius < p.x + p.width &&
          (bird.y - bird.radius < p.topHeight || bird.y + bird.radius > p.topHeight + p.gap)
        ) {
          endGame();
        }

        // Score
        if (!p.passed && p.x + p.width < bird.x) {
          p.passed = true;
          localScore++;
        }

        if (p.x + p.width < 0) pipes.splice(i, 1);
      }

      // Border collision
      if (bird.y + bird.radius > CANVAS_HEIGHT || bird.y - bird.radius < 0) {
        endGame();
      }

      frameCount++;
      draw();
      animationId = requestAnimationFrame(update);
    };

    const endGame = () => {
      localGameOver = true;
      updateWorldRecord(localScore);
      draw(); // Draw final frame
    };

    const draw = () => {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      
      // Draw Background
      ctx.fillStyle = '#060e20';
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Draw Grid
      ctx.strokeStyle = 'rgba(0, 230, 57, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < CANVAS_WIDTH; x += 40) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, CANVAS_HEIGHT);
          ctx.stroke();
      }

      // Draw Bird
      ctx.fillStyle = bird.color;
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#00E639';
      ctx.beginPath();
      ctx.arc(bird.x, bird.y, bird.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw Pipes
      pipes.forEach(p => {
        ctx.fillStyle = '#1a3b5c';
        ctx.fillRect(p.x, 0, p.width, p.topHeight);
        ctx.fillRect(p.x, p.topHeight + p.gap, p.width, CANVAS_HEIGHT - (p.topHeight + p.gap));
        ctx.strokeStyle = '#00E63922';
        ctx.strokeRect(p.x, 0, p.width, p.topHeight);
        ctx.strokeRect(p.x, p.topHeight + p.gap, p.width, CANVAS_HEIGHT - (p.topHeight + p.gap));
      });

      // UI
      ctx.fillStyle = '#00E639';
      ctx.font = '14px Courier New';
      ctx.fillText(`DATA_NODES: ${localScore}`, 20, 30);
      ctx.fillText(`WORLD_RECORD: ${isSyncing ? '...' : worldRecord}`, CANVAS_WIDTH - 200, 30);
      ctx.font = '10px Courier New';
      ctx.fillText('ESC_TO_EXIT', CANVAS_WIDTH - 120, 50);

      if (localGameOver) {
        ctx.fillStyle = 'rgba(6, 14, 32, 0.85)';
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ff4444';
        ctx.font = '30px Courier New';
        ctx.fillText('PACKET_LOST', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 20);
        
        ctx.fillStyle = '#00E639';
        ctx.font = '18px Courier New';
        ctx.fillText(`SESSION_NODES: ${localScore}`, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 20);
        
        if (localScore > worldRecord) {
            ctx.fillStyle = '#ffcc00';
            ctx.font = '14px Courier New';
            ctx.fillText('NEW_WORLD_RECORD_SET!', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 45);
        }

        ctx.fillStyle = '#ffffff';
        ctx.font = '14px Courier New';
        ctx.fillText('PRESS R OR CLICK TO RETRANSMIT', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 80);
      }
    };

    update();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [onExit, worldRecord, isSyncing]);

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center bg-[#060e20]">
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
