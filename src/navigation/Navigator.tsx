import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import OnboardingScreen from '../screens/auth/OnboardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import TermsScreen from '../screens/auth/TermsScreen';
import AuthContext from '../auth/authContext';
import FeedScreen from '../screens/FeedScreen';
import CustomTab from './CustomTab';

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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigator() {
  const {onboarded} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {onboarded ? (
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
