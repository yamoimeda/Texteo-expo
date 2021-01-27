import React from 'react';
import { registerRootComponent } from 'expo';
import Apps from './App';
import AppLoading from 'expo-app-loading'
import {
    useFonts,
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold
  } from '@expo-google-fonts/montserrat';

  import { Platform, StatusBar } from 'react-native';

  StatusBar.setBarStyle("light-content");
  if (Platform.OS === "android") {
    StatusBar.setBackgroundColor("rgba(0,0,0,0)");
    StatusBar.setTranslucent(true);
  }

const App = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold
  });
  if(!fontsLoaded) {
    return <AppLoading/>
  }
  return(
    
      <Apps/>
    
  )
}
registerRootComponent(App);


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately

