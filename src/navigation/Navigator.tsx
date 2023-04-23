import React, {useContext} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

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
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Feed')} />
    </View>
  );
}

function SearchScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Search Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Feed')} />
    </View>
  );
}

function TrendingScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Trending Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Feed')} />
    </View>
  );
}

function DrawerNav() {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={({navigation}) => ({
        headerLeft: props => (
          <TouchableOpacity onPress={navigation.toggleDrawer}>
            <Text>X</Text>
          </TouchableOpacity>
        ),
        headerShown: false,
      })}>
      <Drawer.Screen name="Main" component={TabNav} />
      <Drawer.Screen name="Feed" component={FeedScreen} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
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
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Trending" component={TrendingScreen} />
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
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Terms" component={TermsScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Navigator;
