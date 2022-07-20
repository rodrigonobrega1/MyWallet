import React, { createContext, useState, useContext, ReactNode} from "react";

interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
    
}

interface IProps {
    children?: ReactNode;
}


const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<IProps> = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@MyWallet:logged')
    
        return !!isLogged;
    
    });

    const signIn = (email: string, password: string) => {
        if(email === 'teste@gmail.com' && password === '123'){
            localStorage.getItem('@MyWallet:logged');
            setLogged(true);
        }else{
            alert('Invalid User!');
        }

    }

    const signOut = () => {
        localStorage.removeItem('@MyWallet:logged');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

    function useAuth(): IAuthContext {
        const context = useContext(AuthContext);
        return context
    }

        export { AuthProvider, useAuth};