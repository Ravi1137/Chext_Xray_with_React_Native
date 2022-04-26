import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Scan from './src/screens/Scan';
export default function App() {

  const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Scan" component={Scan}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
