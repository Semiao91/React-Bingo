import {animated, useSpring} from 'react-spring';
import {Firework} from "./Firework.jsx";

export const Celebration = ({celebrate}) => {
  const animationProps = useSpring({
    from: {opacity: 0, transform: 'translate(-50%, -50%) scale(1)'}, to: async (next) => {
      await next({opacity: 1, transform: 'translate(-50%, -50%) scale(1)'});
    }, config: {duration: 2000}, reset: true, reverse: !celebrate,
  });

  return (<>
    {celebrate && (<animated.div
        style={animationProps}
        className="fixed top-[40%] left-1/2"
      >

        <img src={'/goal.png'} />
        <Firework celebrate={celebrate}/>
      </animated.div>

    )}
  </>);
};