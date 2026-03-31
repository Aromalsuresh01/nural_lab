import { useEffect, useRef } from 'react';

interface Pipe {
  x: number;
  topHeight: number;
  width: number;
  gap: number;
  passed: boolean;
}

export default function FlappyGame({ onExit }: { onExit: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Constants
  const GRAVITY = 0.25;
  const JUMP_POWER = -5;
  const PIPE_SPEED = 2;
  const PIPE_SPAWN_RATE = 120; // frames
  const CANVAS_WIDTH = 800;
  const CANVAS_HEIGHT = 400;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Bird State
    const bird = {
      x: 100,
      y: CANVAS_HEIGHT / 2,
      radius: 10,
      velocity: 0,
      color: '#00E639' // Tertiary green
    };

    // Pipes State
    let pipes: Pipe[] = [];
    let frameCount = 0;
    let localScore = 0;
    let localGameOver = false;

    // Input Handling
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
        if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w') {
            e.preventDefault();
            bird.velocity = JUMP_POWER;
        }
        if (e.key === 'Escape') onExit();
    };

    const handleMouseDown = (e: globalThis.MouseEvent) => {
      e.preventDefault();
      bird.velocity = JUMP_POWER;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    // Animation Loop
    let animationId: number;

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
        pipes.push({
          x: CANVAS_WIDTH,
          topHeight: topHeight,
          width: 50,
          gap: gapHeight,
          passed: false
        });
      }

      for (let i = pipes.length - 1; i >= 0; i--) {
        const p = pipes[i];
        p.x -= PIPE_SPEED;

        // Collision detection
        if (
          bird.x + bird.radius > p.x &&
          bird.x - bird.radius < p.x + p.width &&
          (bird.y - bird.radius < p.topHeight || bird.y + bird.radius > p.topHeight + p.gap)
        ) {
          localGameOver = true;
        }

        // Score logic
        if (!p.passed && p.x + p.width < bird.x) {
          p.passed = true;
          localScore++;
        }

        // Cleanup
        if (p.x + p.width < 0) {
          pipes.splice(i, 1);
        }
      }

      // Border collision
      if (bird.y + bird.radius > CANVAS_HEIGHT || bird.y - bird.radius < 0) {
        localGameOver = true;
      }

      frameCount++;
      draw();
      animationId = requestAnimationFrame(update);
    };

    const draw = () => {
      // Clear
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
        // Top pipe
        ctx.fillRect(p.x, 0, p.width, p.topHeight);
        // Bottom pipe
        ctx.fillRect(p.x, p.topHeight + p.gap, p.width, CANVAS_HEIGHT - (p.topHeight + p.gap));
        
        // Highlights/Details
        ctx.strokeStyle = '#00E63922';
        ctx.strokeRect(p.x, 0, p.width, p.topHeight);
        ctx.strokeRect(p.x, p.topHeight + p.gap, p.width, CANVAS_HEIGHT - (p.topHeight + p.gap));
      });

      // UI
      ctx.fillStyle = '#00E639';
      ctx.font = '14px Courier New';
      ctx.fillText(`DATA_NODES: ${localScore}`, 20, 30);
      ctx.fillText('ESC_TO_EXIT', CANVAS_WIDTH - 120, 30);

      if (localGameOver) {
        ctx.fillStyle = 'rgba(6, 14, 32, 0.8)';
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.fillStyle = '#ff4444';
        ctx.font = '30px Courier New';
        ctx.textAlign = 'center';
        ctx.fillText('PACKET_LOST', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
        ctx.font = '15px Courier New';
        ctx.fillText('RETRYING_CONNECTION // PRESS ESC', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 40);
      }
    };

    update();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [onExit]);

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
