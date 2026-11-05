import React, { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Subtle interactive 3D particle nodes
    const nodeCount = Math.min(Math.floor((width * height) / 22000), 55);
    let nodes = [];

    const colors = [
      'rgba(255, 77, 0, 0.45)',   // Orange
      'rgba(0, 85, 255, 0.4)',    // Blue
      'rgba(112, 0, 255, 0.35)',  // Purple
      'rgba(204, 255, 0, 0.3)',   // Lime
    ];

    function initNodes() {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 2.2 + 0.8,
          color: colors[Math.floor(Math.random() * colors.length)],
          depth: Math.random() * 0.8 + 0.2, // 3D depth multiplier
        });
      }
    }

    initNodes();

    const render = () => {
      // Ease mouse coordinates for silky responsiveness
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const offsetX = ((mouseX - width / 2) / (width / 2)) * 25;
      const offsetY = ((mouseY - height / 2) / (height / 2)) * 25;

      // Draw interactive connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.12;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(
              nodes[i].x + offsetX * nodes[i].depth,
              nodes[i].y + offsetY * nodes[i].depth
            );
            ctx.lineTo(
              nodes[j].x + offsetX * nodes[j].depth,
              nodes[j].y + offsetY * nodes[j].depth
            );
            ctx.stroke();
          }
        }
      }

      // Draw and update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        // Wrap edges smoothly
        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        // Mouse repelling / reacting effect (Igloo reference)
        const dxMouse = (node.x + offsetX * node.depth) - mouseX;
        const dyMouse = (node.y + offsetY * node.depth) - mouseY;
        const distMouse = Math.hypot(dxMouse, dyMouse);

        let renderX = node.x + offsetX * node.depth;
        let renderY = node.y + offsetY * node.depth;

        if (distMouse < 140) {
          const angle = Math.atan2(dyMouse, dxMouse);
          const force = (140 - distMouse) * 0.08;
          renderX += Math.cos(angle) * force;
          renderY += Math.sin(angle) * force;
        }

        ctx.beginPath();
        ctx.arc(renderX, renderY, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic ambient color blooms */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-[#FF4D00] opacity-15 blur-[120px] animate-pulse-slow" />
      <div className="absolute top-[40%] left-[-15%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-[#0055FF] opacity-15 blur-[130px]" />
      <div className="absolute bottom-[-10%] right-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-[#7000FF] opacity-10 blur-[140px] animate-float" />
      
      {/* Precision grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Reactive WebGL / 2D Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
}
