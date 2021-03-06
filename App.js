import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,FlatList,Text  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { default as theme } from './theme.json';
import * as eva from '@eva-design/eva';
import  PantallaInicio  from "./pantallas/inicio";
import  Chat  from "./pantallas/chat";
import  Registar  from "./pantallas/registrar";
import * as SQLite from 'expo-sqlite';

const Stack = createStackNavigator();

function Inicio({navigation }){
  
  return(
    <PantallaInicio navigation = {navigation}/>
  /* <View style={styles.container}>
    
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
</View> 
*/

  );
}


function Chats({route, navigation }) {
  return (
    <Chat navigation = {navigation} route={route}/>
  );
}


function Registrar({route, navigation }) {
  return (
    <Registar navigation = {navigation} route={route}/>
  );
}





export default function App() {
  return (
  
    <NavigationContainer>
    <Stack.Navigator   
      initialRouteName="Registrar"
      screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Registrar" component={Registrar} />
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Chats" component={Chats} />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 192,
  },
  icon: {
    width: 32,
    height: 32,
  },
});
