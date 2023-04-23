import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigatoin {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  FeedScreen: undefined;
  LoginScreen: undefined;
  Tabs: undefined;
  MessagesScreen: undefined;
  OnboardingScreen: undefined;
  SearchScreen: undefined;
  TermsScreen: undefined;
  TrendingScreen: undefined;
};

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
