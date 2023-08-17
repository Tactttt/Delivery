import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Display } from '../utils';
import { useFonts } from 'expo-font';
import { useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Colors, Images } from '../contants';

SplashScreen.preventAutoHideAsync();

const Splash_Screen = ({navigation}) => {
  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('../../src/assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('../../src/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('../../src/assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('../../src/assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('../../src/assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../../src/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../../src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../../src/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('../../src/assets/fonts/Poppins-Thin.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container1} onLayout={onLayout}>
      <StatusBar barStyle="default" backgroundColor={Colors.DEFAULT_GREEN} translucent />
      <TouchableOpacity>
        <Image source={Images.PLATE} resizeMode="contain" style={styles.image} />
        <Text style={styles.titleText} onPress={() => navigation.navigate('HelloScreen')}>
          Delivery \\
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    backgroundColor: Colors.DEFAULT_GREEN,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: Display.setHeight(30),
    width: Display.setWidth(60),
  },
  titleText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.DEFAULT_WHITE,
    fontSize: 32,
    fontFamily: 'Poppins-Light',
  },
});

export default Splash_Screen;
