import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable'; 

const SplashSrc = () => {
  useEffect(() => {
    setTimeout(() => {
      // Logic to navigate or change state to hide the splash screen
    }, 2000); // Change the time as needed
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="zoomIn"
        duration={1500}
        style={styles.imageContainer}
      >
        <Image
          source={require('../assets/fastlogo.png')}
          style={styles.image}
        />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    width: 200,
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default SplashSrc;
