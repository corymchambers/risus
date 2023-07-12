import {useAppSelector} from '../redux/hooks';

export const useTheme = () => {
  const theme = useAppSelector(state => state.theme.theme);

  return {theme};
};
