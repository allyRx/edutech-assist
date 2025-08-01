import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Users, BookOpen, Calendar, Settings, LogOut } from 'lucide-react';
import heroImage from '@/assets/hero-training.jpg';

const Index = () => {
  const navigate = useNavigate();
  const { authState, logout } = useAuth();

  useEffect(() => {
    if (!authState.isAuthenticated) {
      navigate('/auth');
    }
  }, [authState.isAuthenticated, navigate]);

  if (!authState.isAuthenticated) {
    return null;
  }

  const dashboardCards = [
    { title: "Entreprises", count: "12", icon: Users, color: "text-primary" },
    { title: "Formations", count: "8", icon: BookOpen, color: "text-secondary" },
    { title: "Sessions", count: "24", icon: Calendar, color: "text-info" },
    { title: "Stagiaires", count: "156", icon: BarChart3, color: "text-success" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <header className="bg-white border-b shadow-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <img src={heroImage} alt="Logo" className="h-10 w-10 rounded-lg" />
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Centre de Formation
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                {authState.admin?.prenom} {authState.admin?.nom}
              </span>
              <Button variant="outline" size="sm" onClick={logout}>
                <LogOut className="h-4 w-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground">Tableau de bord</h2>
          <p className="text-muted-foreground">Gérez vos formations et suivez vos stagiaires</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardCards.map((card, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {card.title}
                </CardTitle>
                <card.icon className={`h-4 w-4 ${card.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.count}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>Fonctionnalités à venir</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Gestion des entreprises</h3>
                <p className="text-sm text-muted-foreground">Ajout et suivi des entreprises partenaires</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Sessions de formation</h3>
                <p className="text-sm text-muted-foreground">Planification et suivi des sessions</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Questionnaires</h3>
                <p className="text-sm text-muted-foreground">Collecte et analyse des réponses</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Emails automatiques</h3>
                <p className="text-sm text-muted-foreground">Envoi programmé selon les formations</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
