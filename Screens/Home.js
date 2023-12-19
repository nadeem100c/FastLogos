import React, { useState, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { WebView } from 'react-native-webview';
import {
    useFonts,
    Urbanist_300Light,
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold,
} from '@expo-google-fonts/urbanist';

export default function Home() {
    const navigation = useNavigation()

    const [showWebView, setShowWebView] = useState(false);
    const [webUrl, setWebUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const webviewRef = useRef(null);

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
    const data = [
        { id: '1', imageSource: require('../assets/Nahi.png'), url: 'https://rawayeh-alghethaa.org//' },
        { id: '2', imageSource: require('../assets/maiga11.png'), url: 'https://maiga-water.com/' },
        { id: '3', imageSource: require('../assets/maiga2.png'), url: 'http://ww12.maiga-pizza.com/' },
        { id: '4', imageSource: require('../assets/alqarn.png'), url: 'https://rawayeh-bakery.com/' },
        { id: '5', imageSource: require('../assets/organicbakry.png'), url: 'http://ww12.rawayeh-wheat.com/' },
        { id: '6', imageSource: require('../assets/nakwat.png'), url: 'https://rawayeh-na9wa.com/' },
        { id: '7', imageSource: require('../assets/nukwat2.png'), url: 'http://ww12.rawayeh-naqwa.com/' },
        { id: '8', imageSource: require('../assets/wahad.png'), url: 'https://rawayeh-waha.com/' },
        { id: '9', imageSource: require('../assets/manal.png'), url: 'http://globalapiariesrawa.com/' },
        { id: '10', imageSource: require('../assets/manal2.png'), url: 'https://rawayeh-waha.com/' },
        { id: '11', imageSource: require('../assets/ovilo.png') },
        { id: '12', imageSource: require('../assets/forever.png') },
        { id: '13', imageSource: require('../assets/fastlogo.png') },
        { id: '14', imageSource: require('../assets/fastlogo2.jpg') },


    ];
    SplashScreen.preventAutoHideAsync().then(() => {
        SplashScreen.hideAsync().catch(() => {

        });
    });

    const handlegoBack = () => {
        setShowWebView(false);
    };
    const onLoadStart = () => {
        setLoading(true);
    };

    const onLoadEnd = () => {
        setLoading(false);
    };
    const handleImagePress = (url) => {
        setWebUrl(url);
        setShowWebView(true);
    };
    const renderImageItem = ({ item }) => (
        <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => handleImagePress(item.url)}
        >
            <Image source={item.imageSource} style={styles.images} />
        </TouchableOpacity>
    );

    if (showWebView) {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={handlegoBack} style={styles.Button}>
                    <Text style={{ backgroundColor: "#dff0e8", fontWeight: "600", fontSize: 25, textAlign: "center" }}>Go Back</Text>
                </TouchableOpacity>
                {loading && <ActivityIndicator style={styles.spinner} size="large" color="blue" />}
                <WebView
                    key={webUrl}
                    ref={webviewRef}
                    source={{ uri: webUrl }}
                    onLoadStart={onLoadStart}
                    onLoadEnd={onLoadEnd}
                    onError={(error) => console.error('WebView error:', error)}

                />
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={{ justifyContent: "center", backgroundColor: "#047542", height: '25%', borderBottomRightRadius: 40, borderBottomLeftRadius: 40,alignItems:"center" }}>

                <View style={{ position: "absolute", flexDirection: "row" }}>
                    <View style={{ flexDirection: "column", marginTop: 30, marginRight: 10, marginLeft: 20 }}>
                        <Text style={[styles.titlestyle, {}]} >فورا  للأغدية</Text>  
                        <Text style={styles.titlestyle}>For Food </Text>
                    </View> 
                    
                    <View style={{ flexDirection: "column", marginTop: 30 }}>
                        <Text style={[styles.titlestyle, { marginLeft: 10 }]}>شركة فورا</Text>
                        <Text style={[styles.titlestyle, { marginLeft: 10 }]}>Fast Company</Text>

                    </View>
                </View>
            </View>
            <View style={{ alignSelf: "center", marginTop: 10, marginHorizontal: 10, height: "72%", }}>
                <FlatList

                    data={data}
                    renderItem={renderImageItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.imageList}
                    showsVerticalScrollIndicator={false}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titlestyle: {
        color: "white",
        fontSize: 27,
        fontFamily: "Urbanist_600SemiBold"

    },

    titlebackground: {
        height: 200,
        width: "100%",
        borderBottomRightRadius: 17,
        borderBottomLeftRadius: 17

    },
    logo: {
        height: 80,
        width: 80,
        borderRadius: 10,
        marginTop: 25,
        marginRight: 5

    },
    images: {
        height: 200,
        width: 220
    },
    imageList: {
        alignSelf: 'center',
    },
    imageContainer: {

        marginBottom: 20
    },
    images: {
        height: 200,
        width: 220,
    },
    Button: {
    },
    backbtn: {
        height: 50,
        width: 50
    },
    spinner: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: 9999,
    },
});



