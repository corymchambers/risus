import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { Routes } from './routes';

declare global {
  namespace ReactNavigatoin {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  ComingSoonScreen: undefined;
  FeedScreen: undefined;
  LoginScreen: {
    onboarded?: boolean;
  };
  LoginMethodScreen: undefined;
  Tabs: undefined;
  MessagesScreen: undefined;
  OnboardingScreen: undefined;
  SearchScreen: undefined;
  SplashScreen: undefined;
  TermsScreen: {
    navOnAccept: Routes;
  };
  ThemesScreen: undefined;
  TrendingScreen: undefined;
};

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
