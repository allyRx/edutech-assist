import { useState } from 'react';
import { LoginForm } from '@/components/auth/LoginForm';
import { RegisterForm } from '@/components/auth/RegisterForm';
import heroImage from '@/assets/hero-training.jpg';

export default function AuthPage() {
  const [showRegister, setShowRegister] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  if (showForgotPassword) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Récupération de mot de passe</h2>
          <p className="text-muted-foreground mb-4">Fonctionnalité en cours de développement</p>
          <button 
            onClick={() => setShowForgotPassword(false)}
            className="text-primary hover:underline"
          >
            Retour à la connexion
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="grid lg:grid-cols-2 min-h-screen">
        <div className="hidden lg:flex items-center justify-center p-8 bg-gradient-hero">
          <div className="text-center text-white max-w-md">
            <img src={heroImage} alt="Formation Center" className="w-full mb-8 rounded-lg shadow-glow" />
            <h1 className="text-4xl font-bold mb-4">Centre de Formation</h1>
            <p className="text-lg opacity-90">
              Plateforme de gestion complète pour vos formations professionnelles
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center p-8">
          {showRegister ? (
            <div className="w-full space-y-4">
              <RegisterForm onSuccess={() => setShowRegister(false)} />
              <div className="text-center">
                <button 
                  onClick={() => setShowRegister(false)}
                  className="text-sm text-primary hover:underline"
                >
                  Déjà un compte ? Se connecter
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full space-y-4">
              <LoginForm onForgotPassword={() => setShowForgotPassword(true)} />
              <div className="text-center">
                <button 
                  onClick={() => setShowRegister(true)}
                  className="text-sm text-primary hover:underline"
                >
                  Créer un compte administrateur
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}