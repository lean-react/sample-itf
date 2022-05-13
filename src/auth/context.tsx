import { createContext, ReactNode, useContext, useReducer } from "react";
import User from "./user";


type AuthProviderProps = {
    children: ReactNode
}

type AuthActions = 
  | { type: 'login', name: string }
  | { type: 'logout' }
  | { type: 'changeName', name: string };

function authReducer(state: User, action: AuthActions): User {
    switch(action.type) {
        case 'login': return { isAnonymous: false, name: action.name };
        case 'logout': return { isAnonymous: true };
        case 'changeName': return { ...state, name: action.name };
    }
}

export const AuthContext = createContext<{ user: User, dispatch: (action: AuthActions) => void }>(null as any);

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [user, dispatch] = useReducer(authReducer, { isAnonymous: true } );
    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const { user, dispatch } = useContext(AuthContext);

    const login = (name: string) => dispatch({type: 'login', name});
    const logout = () => dispatch({type: 'logout'});
    const setName = (name: string) => dispatch({type: 'changeName', name});

    return { user, login, logout, setName };
}
