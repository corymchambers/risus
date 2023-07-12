import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import OnboardingScreen from '../screens/auth/OnboardingScreen';
import LoginMethodScreen from '../screens/auth/LoginMethodScreen';
import TermsScreen from '../screens/auth/TermsScreen';
import FeedScreen from '../screens/FeedScreen';
import CustomTab from './CustomTab';
import MessagesScreen from '../screens/MessagesScreen';
import SearchScreen from '../screens/SearchScreen';
import TrendingScreen from '../screens/TrendingScreen';
import {Routes} from './routes';
import {RootStackParamList} from './navTypes';
import DrawerIcon from './DrawerIcon';
import DrawerContent from './DrawerContent';
import {useAppSelector} from '../redux/hooks';
import ThemesScreen from '../screens/ThemesScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SplashScreen from '../screens/auth/SplashScreen';
import ComingSoonScreen from '../screens/ComingSoonScreen';

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
      <Drawer.Screen name="Stack" component={StackNavigator} />
    </Drawer.Navigator>
  );
}

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.SplashScreen}
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen
        name={Routes.ComingSoonScreen}
        component={ComingSoonScreen}
        options={() => ({
          headerShown: true,
          title: 'Coming Soon',
        })}
      />
      <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} />
      <Stack.Screen name={Routes.TabsStack} component={TabNav} />
      <Stack.Screen
        name={Routes.ThemesScreen}
        component={ThemesScreen}
        options={() => ({
          headerShown: true,
        })}
      />
      <Stack.Screen
        name={Routes.OnboardingScreen}
        component={OnboardingScreen}
      />
      <Stack.Screen name={Routes.LoginScreen} component={LoginScreen} />
      <Stack.Screen
        name={Routes.LoginMethodScreen}
        component={LoginMethodScreen}
      />
      <Stack.Screen name={Routes.TermsScreen} component={TermsScreen} />
    </Stack.Navigator>
  );
};

function TabNav() {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Tab.Navigator
      screenOptions={allProps => ({
        tabBarButton: () => <CustomTab props={allProps} />,
        tabBarStyle: {backgroundColor: theme.color1, height: 80},
        headerStyle: {
          backgroundColor: theme.color2,
        },
        headerTintColor: theme.color5,
      })}>
      <Tab.Screen
        name={Routes.FeedScreen}
        component={FeedScreen}
        options={{
          title: 'Feed',
          headerLeft: DrawerIcon,
        }}
      />
      <Tab.Screen
        name={Routes.MessagesScreen}
        component={MessagesScreen}
        options={{
          title: 'Messages',
          headerLeft: DrawerIcon,
        }}
      />
      <Tab.Screen
        name={Routes.SearchScreen}
        component={SearchScreen}
        options={{
          title: 'Search',
          headerLeft: DrawerIcon,
        }}
      />
      <Tab.Screen
        name={Routes.TrendingScreen}
        component={TrendingScreen}
        options={{
          title: 'Trending',
          headerLeft: DrawerIcon,
        }}
      />
    </Tab.Navigator>
  );
}

function Navigator() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}

export default Navigator;
