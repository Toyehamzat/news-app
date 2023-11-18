import React, { useEffect, useCallback } from "react";
import { View, Text, ImageBackground, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function SplashScreens() {
  const navigation = useNavigation();

  const [fontsLoaded, fontError] = useFonts({
    SpaceGroteskSemiBold: require("../fonts/SpaceGrotesk-SemiBold.ttf"),
    SpaceGroteskBold: require("../fonts/SpaceGrotesk-Bold.ttf"),
    SpaceGroteskMedium: require("../fonts/SpaceGrotesk-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }

    setTimeout(() => {
      navigation.navigate("Welcome"); // Navigate to HomeTab
    }, 2000); // 3 seconds delay
  }, [fontsLoaded, fontError, navigation]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1" onLayout={onLayoutRootView}>
      <ImageBackground
        className="flex-1 justify-center items-center"
        source={require("../../assets/images/reporter/picture.jpg")}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.25)", "rgba(0,0,0,0.25)"]}
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100%",
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
        <Text className="text-white text-3xl font-extrabold uppercase">
          stack News App
        </Text>
        <ActivityIndicator
          size="large"
          color="white"
          style={{ marginTop: 10 }}
        />
      </ImageBackground>
    </View>
  );
}
