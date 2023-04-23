import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

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
import DrawerIcon from './DrawerIcon';
import DrawerContent from './DrawerContent';
import {useAppSelector} from '../redux/hooks';
import ThemesScreen from '../screens/ThemesScreen';

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
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Tabs" component={TabNav} />
      <Stack.Screen
        name={Routes.ThemesScreen}
        component={ThemesScreen}
        options={() => ({
          headerShown: true,
        })}
      />
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
