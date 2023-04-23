import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Routes} from './routes';

type Tabs = {
  [key in Routes]?: {
    label: string;
    icon: any;
    borderRightWidth: number;
    iconName: string;
  };
};
export const tabs: Tabs = {
  [Routes.FeedScreen]: {
    label: 'Feed',
    icon: Ionicons,
    borderRightWidth: 0.5,
    iconName: 'people',
  },
  [Routes.MessagesScreen]: {
    label: 'Messages',
    icon: MaterialCommunityIcons,
    borderRightWidth: 0.5,
    iconName: 'message',
  },
  [Routes.SearchScreen]: {
    label: 'Search',
    icon: Ionicons,
    borderRightWidth: 0.5,
    iconName: 'search',
  },
  [Routes.TrendingScreen]: {
    label: 'Trending',
    icon: MaterialCommunityIcons,
    borderRightWidth: 0,
    iconName: 'sunglasses',
  },
};
