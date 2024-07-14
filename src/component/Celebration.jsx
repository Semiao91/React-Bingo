import {animated, useSpring} from 'react-spring';

export const Celebration = ({celebrate}) => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0)' },
    to: async (next) => {
      await next({ opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }); // Start from center
      await next({ transform: 'translate(-60%, -50%) scale(1)' }); // Drift to the left
      await next({ opacity: 0, transform: 'translate(-80%, -50%) scale(0)' }); // Disappear off-screen
    },
    config: { duration: 2000 }, // Total duration of animation
    reset: true, // Reset animation on change
    reverse: !celebrate, // Reverse animation when not celebrating
  });

  return (
    <>
      {celebrate && (
        <animated.div
          style={{
            ...animationProps,
            position: 'fixed',
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1, // Ensure it appears on top
            color: '#ffffff', // Text color
            fontSize: '10rem', // Adjust font size as needed
            fontWeight: 'bold', // Make the text bold
          }}
        >
          GOAL!!
        </animated.div>
      )}
    </>
  );
};