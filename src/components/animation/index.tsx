import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  pastZ: number;
}

const ParticleComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let canvasWidth: number, canvasHeight: number;
  let context: CanvasRenderingContext2D;
  let centerX: number, centerY: number;
  let mouseX: number, mouseY: number;
  let speed: number = 2;
  let targetSpeed: number = 2;
  let particles: Particle[] = [];

  useEffect(() => {
    const canvas = canvasRef.current!;
    canvasWidth = canvas.width = window.innerWidth;
    canvasHeight = canvas.height = window.innerHeight;
    centerX = canvasWidth * 0.5;
    centerY = canvasHeight * 0.5;
    context = canvas.getContext("2d")!;
    context.fillStyle = "rgb(255,255,255)";

    mouseX = centerX;
    mouseY = centerY;

    particles = [];
    for (let i: number = 0; i < 500; i++) {
      particles[i] = randomizeParticle({} as Particle);
      particles[i].z -= 500 * Math.random();
    }

    const handleMouseMove = (e: MouseEvent): void => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseDown = () => {
      targetSpeed = 300;
    };

    const handleMouseUp = () => {
      targetSpeed = 2;
    };

    document.addEventListener("mousemove", handleMouseMove, false);
    document.addEventListener("mousedown", handleMouseDown, false);
    document.addEventListener("mouseup", handleMouseUp, false);

    const intervalId = setInterval(loop, 1000 / 60);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      clearInterval(intervalId);
    };
  }, []);

  function loop() {
    context.save();
    context.fillStyle = "rgb(0, 0, 0)";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.restore();

    speed += (targetSpeed - speed) * 0.01;

    let p: Particle;
    let cx, cy;
    let rx, ry;
    let f, x, y, r;
    let pf, px, py, pr;
    let a, a1, a2;

    const halfPi = Math.PI * 0.5;
    const atan2 = Math.atan2;
    const cos = Math.cos;
    const sin = Math.sin;

    context.beginPath();
    for (let i = 0; i < 500; i++) {
      p = particles[i];

      p.pastZ = p.z;
      p.z -= speed;

      if (p.z <= 0) {
        randomizeParticle(p);
        continue;
      }

      cx = centerX - (mouseX - centerX) * 1.25;
      cy = centerY - (mouseY - centerY) * 1.25;

      rx = p.x - cx;
      ry = p.y - cy;

      f = 500 / p.z;
      x = cx + rx * f;
      y = cy + ry * f;
      r = 0.5 * f;

      pf = 500 / p.pastZ;
      px = cx + rx * pf;
      py = cy + ry * pf;
      pr = 0.5 * pf;

      a = atan2(py - y, px - x);
      a1 = a + halfPi;
      a2 = a - halfPi;

      context.moveTo(px + pr * cos(a1), py + pr * sin(a1));
      context.arc(px, py, pr, a1, a2, true);
      context.lineTo(x + r * cos(a2), y + r * sin(a2));
      context.arc(x, y, r, a1, a2, true);
      context.closePath();
    }
    context.fill();
  }

  function randomizeParticle(p: Particle) {
    p.x = Math.random() * canvasWidth;
    p.y = Math.random() * canvasHeight;
    p.z = Math.random() * 1500 + 500;
    return p;
  }

  return <canvas ref={canvasRef}></canvas>;
};

export default ParticleComponent;
