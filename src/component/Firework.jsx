import React, { useEffect, useRef } from 'react';
import { Fireworks } from 'fireworks-js';

export const Firework = ({ celebrate }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (celebrate && containerRef.current) {
      const options = {
        hue: { min: 0, max: 360 },
        delay: { min: 15, max: 30 },
        rocketsPoint: { min: 50, max: 50 },
        speed: 2,
        acceleration: 1.05,
        friction: 0.95,
        gravity: 1.5,
        particles: 50,
        trace: 3,
        explosion: 5,
        autoresize: true,
        brightness: { min: 50, max: 80, decay: { min: 0.015, max: 0.03 } },
        boundaries: {
          x: 0,
          y: 0,
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        },
      };

      const fireworks = new Fireworks(containerRef.current, options);
      fireworks.start();

      return () => {
        fireworks.stop();
      };
    }
  }, [celebrate]);

  return <div ref={containerRef} className="fireworks-container fixed top-0 left-0 w-full h-full pointer-events-none z-2" />;
};
