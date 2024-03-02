import React from 'react';
import { useSpring, animated } from 'react-spring';

const HomePage = () => {
  // Define animations using useSpring hook
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  const slideIn = useSpring({
    from: { transform: 'translateY(100px)' },
    to: { transform: 'translateY(0px)' },
    config: { duration: 1000 }
  });

  return (
    <div className="home-page">
      <animated.h1 style={fadeIn}>Welcome to Home Page</animated.h1>
    </div>
  );
}

export default HomePage;
