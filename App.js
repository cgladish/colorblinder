import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import { StatusBar, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Routes from "./screens/Routes";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isFontLoaded] = useFonts({
    dogbyte: require("./assets/fonts/dogbyte.otf"),
  });

  useEffect(() => {
    if (isFontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isFontLoaded]);

  if (!isFontLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Routes />
    </>
  );
}
