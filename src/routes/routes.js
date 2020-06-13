import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from '../screen/Login';
import Register from '../screen/Register';
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import Saldo from '../screen/Saldo';
import RiwayatTransaksi from '../screen/RiwayatTransaksi';
import ChatAdmin from '../screen/ChatAdmin';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function CoreApps() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let sizeIcon;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
            sizeIcon = size + 6;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
            sizeIcon = size + 3;
          } else if (route.name === 'Saldo') {
            iconName = focused ? 'credit-card' : 'credit-card';
            sizeIcon = size;
          } else if (route.name === 'RiwayatTransaksi') {
            iconName = focused ? 'history' : 'history';
            sizeIcon = size;
          } else if (route.name === 'ChatAdmin') {
            iconName = focused ? 'wechat' : 'wechat';
            sizeIcon = size;
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={sizeIcon} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'deepskyblue',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen name="Saldo" component={Saldo} />
      <Tab.Screen name="RiwayatTransaksi" component={RiwayatTransaksi} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ChatAdmin" component={ChatAdmin} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function NavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={CoreApps} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;
