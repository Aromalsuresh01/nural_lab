import { useEffect, useRef, useState } from 'react';

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  type?: 'platform' | 'coin' | 'hazard';
}

export default function MarioGame({ onExit }: { onExit: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Constants
  const GRAVITY = 0.5;
  const JUMP_POWER = -10;
  const SPEED = 5;
  const CANVAS_WIDTH = 800;
  const CANVAS_HEIGHT = 400;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Player State
    let player = {
      x: 50,
      y: 300,
      width: 20,
      height: 20,
      vx: 0,
      vy: 0,
      grounded: false,
      color: '#00E639' // Tertiary green
    };

    // Level State
    let scrollX = 0;
    const platforms: GameObject[] = [
      { x: 0, y: 380, width: 2000, height: 20, color: '#001B3D', type: 'platform' }, // Ground
      { x: 200, y: 300, width: 100, height: 20, color: '#1a3b5c', type: 'platform' },
      { x: 400, y: 220, width: 100, height: 20, color: '#1a3b5c', type: 'platform' },
      { x: 600, y: 300, width: 150, height: 20, color: '#1a3b5c', type: 'platform' },
      { x: 800, y: 220, width: 100, height: 20, color: '#1a3b5c', type: 'platform' },
      { x: 1000, y: 300, width: 200, height: 20, color: '#1a3b5c', type: 'platform' },
      { x: 1300, y: 220, width: 100, height: 20, color: '#1a3b5c', type: 'platform' },
      { x: 1500, y: 150, width: 100, height: 20, color: '#1a3b5c', type: 'platform' },
      { x: 1700, y: 300, width: 300, height: 20, color: '#1a3b5c', type: 'platform' },
    ];

    const coins: GameObject[] = [
      { x: 250, y: 260, width: 10, height: 10, color: '#00E639', type: 'coin' },
      { x: 450, y: 180, width: 10, height: 10, color: '#00E639', type: 'coin' },
      { x: 650, y: 260, width: 10, height: 10, color: '#00E639', type: 'coin' },
      { x: 850, y: 180, width: 10, height: 10, color: '#00E639', type: 'coin' },
      { x: 1050, y: 260, width: 10, height: 10, color: '#00E639', type: 'coin' },
      { x: 1550, y: 110, width: 10, height: 10, color: '#00E639', type: 'coin' },
    ];

    const goal = { x: 1900, y: 280, width: 40, height: 100, color: '#00E639' };

    // Input Handling
    const keys: Record<string, boolean> = {};
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      keys[e.key] = true;
      if (e.key === 'Escape') onExit();
    };
    const handleKeyUp = (e: globalThis.KeyboardEvent) => {
      keys[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Animation Loop
    let animationId: number;
    let localGameOver = false;
    let localWin = false;
    let localScore = 0;

    const update = () => {
      if (localGameOver || localWin) return;

      // Handle Input
      if (keys['ArrowRight'] || keys['d']) player.vx = SPEED;
      else if (keys['ArrowLeft'] || keys['a']) player.vx = -SPEED;
      else player.vx = 0;

      if ((keys['ArrowUp'] || keys['w'] || keys[' ']) && player.grounded) {
        player.vy = JUMP_POWER;
        player.grounded = false;
      }

      // Physics
      player.vy += GRAVITY;
      player.x += player.vx;
      player.y += player.vy;

      // Scrolling
      if (player.x > CANVAS_WIDTH / 2) {
        scrollX = player.x - CANVAS_WIDTH / 2;
      }

      // Collision Platforms
      player.grounded = false;
      platforms.forEach(p => {
        if (
          player.x < p.x + p.width &&
          player.x + player.width > p.x &&
          player.y < p.y + p.height &&
          player.y + player.height > p.y
        ) {
          // Bottom of platform
          if (player.vy > 0 && player.y + player.height - player.vy <= p.y) {
            player.y = p.y - player.height;
            player.vy = 0;
            player.grounded = true;
          }
          // Top of platform
          else if (player.vy < 0 && player.y - player.vy >= p.y + p.height) {
              player.y = p.y + p.height;
              player.vy = 0;
          }
        }
      });

      // Collision Coins
      for (let i = coins.length - 1; i >= 0; i--) {
        const c = coins[i];
        if (
          player.x < c.x + c.width &&
          player.x + player.width > c.x &&
          player.y < c.y + c.height &&
          player.y + player.height > c.y
        ) {
          coins.splice(i, 1);
          localScore += 100;
        }
      }

      // Fall off
      if (player.y > CANVAS_HEIGHT) {
        localGameOver = true;
      }

      // Goal
      if (
        player.x < goal.x + goal.width &&
        player.x + player.width > goal.x &&
        player.y < goal.y + goal.height &&
        player.y + player.height > goal.y
      ) {
        localWin = true;
      }

      draw();
      animationId = requestAnimationFrame(update);
    };

    const draw = () => {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      
      // Draw Background
      ctx.fillStyle = '#060e20';
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Save context for scrolling
      ctx.save();
      ctx.translate(-scrollX, 0);

      // Draw Grid
      ctx.strokeStyle = 'rgba(0, 230, 57, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < 2000; x += 40) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, CANVAS_HEIGHT);
          ctx.stroke();
      }

      // Draw Platforms
      platforms.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.width, p.height);
        
        // Hazard stripes pattern
        ctx.strokeStyle = '#00E63922';
        ctx.beginPath();
        for (let i = 0; i < p.width; i += 10) {
            ctx.moveTo(p.x + i, p.y);
            ctx.lineTo(p.x + i + 5, p.y + p.height);
        }
        ctx.stroke();
      });

      // Draw Coins
      coins.forEach(c => {
        ctx.fillStyle = c.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00E639';
        ctx.fillRect(c.x, c.y, c.width, c.height);
        ctx.shadowBlur = 0;
      });

      // Draw Goal
      ctx.fillStyle = goal.color;
      ctx.fillRect(goal.x, goal.y, goal.width, goal.height);
      ctx.font = '10px Courier New';
      ctx.fillText('FIN_NODE', goal.x, goal.y - 10);

      // Draw Player
      ctx.fillStyle = player.color;
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#00E639';
      ctx.fillRect(player.x, player.y, player.width, player.height);
      ctx.shadowBlur = 0;

      ctx.restore();

      // UI
      ctx.fillStyle = '#00E639';
      ctx.font = '14px Courier New';
      ctx.fillText(`DATA_STREAMS: ${localScore}`, 20, 30);
      ctx.fillText('ESC_TO_EXIT', CANVAS_WIDTH - 120, 30);

      if (localGameOver) {
        ctx.fillStyle = 'rgba(6, 14, 32, 0.8)';
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.fillStyle = '#ff4444';
        ctx.font = '30px Courier New';
        ctx.textAlign = 'center';
        ctx.fillText('CONNECTION_LOST', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
        ctx.font = '15px Courier New';
        ctx.fillText('SYSTEM_FAILURE // PRESS ESC', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 40);
      }

      if (localWin) {
        ctx.fillStyle = 'rgba(6, 14, 32, 0.8)';
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.fillStyle = '#00E639';
        ctx.font = '30px Courier New';
        ctx.textAlign = 'center';
        ctx.fillText('UPLOADING_COMPLETE', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
        ctx.font = '15px Courier New';
        ctx.fillText('DATA_FRAGMENTS_COLLECTED // PRESS ESC', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 40);
      }
    };

    update();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
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
