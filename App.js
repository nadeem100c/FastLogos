
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './Screens/Tabscreens/TabNavigator';
import SplashSrc from './Splash/SplashSrc';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      {showSplash ? <SplashSrc /> : <TabNavigator />}
    </NavigationContainer>
  );
}
