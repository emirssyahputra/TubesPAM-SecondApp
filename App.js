import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/screens/Home';
import MyCart from './components/screens/MyCart';
import ProductInfo from './components/screens/ProductInfo';
import Login from './components/screens/Login';
import Lihat1 from './components/screens/Lihat1';
import Lihat2 from './components/screens/Lihat2';
import Verif from './components/screens/Verif';
import Bank from './components/screens/Bank';
import Profil from './components/screens/Profil';
import Register from './components/screens/Register';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="Lihat1" component={Lihat1} />
        <Stack.Screen name="Lihat2" component={Lihat2} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="Bank" component={Bank} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
        <Stack.Screen name="Verif" component={Verif} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
