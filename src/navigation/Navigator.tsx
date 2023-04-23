import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';

import OnboardingScreen from '../screens/auth/OnboardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import TermsScreen from '../screens/auth/TermsScreen';
import AuthContext from '../auth/authContext';
import FeedScreen from '../screens/FeedScreen';
import CustomTab from './CustomTab';
import MessagesScreen from '../screens/MessagesScreen';
import SearchScreen from '../screens/SearchScreen';
import TrendingScreen from '../screens/TrendingScreen';
import {Routes} from './routes';
import {RootStackParamList} from './navTypes';

const Drawer = createDrawerNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

function DrawerNav() {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Drawer.Screen name="Main" component={TabNav} />
      <Drawer.Screen name={Routes.FeedScreen} component={FeedScreen} />
      <Drawer.Screen name={Routes.MessagesScreen} component={MessagesScreen} />
    </Drawer.Navigator>
  );
}

function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={allProps => ({
        tabBarButton: () => <CustomTab props={allProps} />,
        tabBarStyle: {backgroundColor: '#000007'},
      })}>
      <Tab.Screen name={Routes.FeedScreen} component={FeedScreen} />
      <Tab.Screen name={Routes.MessagesScreen} component={MessagesScreen} />
      <Tab.Screen name={Routes.SearchScreen} component={SearchScreen} />
      <Tab.Screen name={Routes.TrendingScreen} component={TrendingScreen} />
    </Tab.Navigator>
  );
}

function Navigator() {
  const {onboarded} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {onboarded ? (
        <DrawerNav />
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={Routes.OnboardingScreen}
            component={OnboardingScreen}
          />
          <Stack.Screen name={Routes.LoginScreen} component={LoginScreen} />
          <Stack.Screen name={Routes.TermsScreen} component={TermsScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Navigator;
