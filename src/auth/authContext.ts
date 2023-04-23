import {createContext} from 'react';

export interface AuthContextProps {
  onboarded: boolean;
  setOnboard: (b: boolean) => void;
}
const AuthContext = createContext({onboarded: false, setOnboarded: () => {}});

export default AuthContext;
