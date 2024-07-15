import {animated, useSpring} from 'react-spring';
import {Firework} from "./Firework.jsx";

export const Celebration = ({celebrate}) => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0)' },
    to: async (next) => {
      await next({ opacity: 1, transform: 'translate(-50%, -50%) scale(1)' });
      await next({ transform: 'translate(-60%, -50%) scale(1)' });
      await next({ opacity: 0, transform: 'translate(-80%, -50%) scale(0)' });
    },
    config: { duration: 2000 },
    reset: true,
    reverse: !celebrate,
  });

  return (
    <>
      {celebrate && (
        <animated.div
        style={animationProps}
        className="fixed top-[20%] left-1/2 text-white text-[10rem] font-bold"
        >
          <Firework celebrate={celebrate} />
          GOAL!!
        </animated.div>

      )}
    </>
  );
};