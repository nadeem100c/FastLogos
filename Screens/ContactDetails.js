import React,{useEffect} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Urbanist_300Light,
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_600SemiBold,
  Urbanist_700Bold,
} from '@expo-google-fonts/urbanist';

const ContactDetails = () => {

  const [fontsLoaded] = useFonts({
    Urbanist_300Light,
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold,
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#51f0cd" }} >
      <View style={styles.Container}>
        <View >
          <Image source={require('../assets/contactimg.png')}
            style={{ height: 100, width: 100 }}
          />
          <Text style={styles.Contacttxt}>Get in Teach</Text>
        </View>
        <View style={styles.contact}>
          <Text style={styles.email}>
            Email:
          </Text>
          <View style={{ flexDirection: "row", borderBottomWidth: 1, marginTop: 10 }}>
            <Ionicons name="mail" size={24} color="#4373e6" />
            <Text style={{ marginLeft: 10,fontFamily:"Urbanist_600SemiBold" }}>abdullahalhagbani1111@outlook.com</Text>
          </View>
          <Text style={styles.mobile}>
            Mobile:
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Ionicons name="call" size={24} color="#4373e6" />
            <Text style={{ marginLeft: 10 }}>0503274447</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContactDetails;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#dae3dd",
    height: 350,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: "60%"
  },
  contact: {
    marginTop: 10
  },
  Contacttxt: {
    fontFamily:"Urbanist_600SemiBold",
    fontSize: 20
  },
  email: {
    fontWeight: "500",
    fontSize: 15,
    fontFamily:"Urbanist_600SemiBold"
  },
  mobile: {
    fontWeight: "500",
    fontSize: 15,
    marginTop: 20,
    fontFamily:"Urbanist_600SemiBold"
  }
})

