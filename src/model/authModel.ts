import { User } from "firebase/auth";

export interface AuthFace {
  user: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  loading: boolean;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
