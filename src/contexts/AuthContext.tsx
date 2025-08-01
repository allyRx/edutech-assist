import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthState, Admin } from '@/types';
import { mockAdmins } from '@/data/mockData';

interface AuthContextType {
  authState: AuthState;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (data: { nom: string; prenom: string; email: string; role: string }) => Promise<boolean>;
  validateAccount: (token: string) => Promise<boolean>;
  resetPassword: (email: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    admin: undefined
  });

  // Simule la persistance de l'authentification
  useEffect(() => {
    const savedAuth = localStorage.getItem('authState');
    if (savedAuth) {
      try {
        const parsed = JSON.parse(savedAuth);
        if (parsed.isAuthenticated && parsed.admin) {
          setAuthState(parsed);
        }
      } catch (error) {
        console.error('Error parsing saved auth state:', error);
        localStorage.removeItem('authState');
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulation d'une vérification d'authentification
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const admin = mockAdmins.find(a => a.email === email && a.validated);
    if (admin && password === 'admin123') { // Mot de passe mock
      const newAuthState = {
        isAuthenticated: true,
        admin
      };
      setAuthState(newAuthState);
      localStorage.setItem('authState', JSON.stringify(newAuthState));
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      admin: undefined
    });
    localStorage.removeItem('authState');
  };

  const register = async (data: { nom: string; prenom: string; email: string; role: string }): Promise<boolean> => {
    // Simulation d'inscription
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Vérifier si l'email existe déjà
    const existingAdmin = mockAdmins.find(a => a.email === data.email);
    if (existingAdmin) {
      return false;
    }

    // Simulation: l'admin sera ajouté avec validated: false
    // En réalité, un email de validation serait envoyé
    console.log('Email de validation envoyé à:', data.email);
    return true;
  };

  const validateAccount = async (token: string): Promise<boolean> => {
    // Simulation de validation de compte
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // En réalité, on vérifierait le token et activerait le compte
    return token === 'mock-validation-token';
  };

  const resetPassword = async (email: string): Promise<boolean> => {
    // Simulation d'envoi d'email de réinitialisation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const admin = mockAdmins.find(a => a.email === email);
    if (admin) {
      console.log('Email de réinitialisation envoyé à:', email);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{
      authState,
      login,
      logout,
      register,
      validateAccount,
      resetPassword
    }}>
      {children}
    </AuthContext.Provider>
  );
};