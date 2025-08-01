export interface Admin {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  role: string;
  validated: boolean;
  createdAt: Date;
}

export interface Entreprise {
  id: string;
  nom: string;
  email: string;
  telephone: string;
  adresse: string;
  statut: 'active' | 'inactive';
  createdAt: Date;
}

export interface Referent {
  id: string;
  entrepriseId: string;
  nom: string;
  email: string;
  telephone: string;
  roleEntreprise: string;
  createdAt: Date;
}

export interface Stagiaire {
  id: string;
  referentId: string;
  nom: string;
  email: string;
  telephone: string;
  createdAt: Date;
}

export interface Formateur {
  id: string;
  nom: string;
  email: string;
  domaineFormation: string;
  createdAt: Date;
}

export interface Formation {
  id: string;
  nom: string;
  lieu: string;
  description: string;
  miniature?: string;
  duree: number; // en heures
  createdAt: Date;
}

export interface Parcours {
  id: string;
  nom: string;
  dureeJours: number;
  createdAt: Date;
}

export interface Session {
  id: string;
  formationId: string;
  parcoursId: string;
  formateurId: string;
  dateDebut: Date;
  dateFin: Date;
  stagiaires: string[]; // IDs des stagiaires
  statut: 'programme' | 'en_cours' | 'annule' | 'termine';
  createdAt: Date;
}

export interface QuestionnaireReponse {
  id: string;
  sessionId: string;
  stagiaireId: string;
  type: 'positionnement' | 'emargement_matin' | 'emargement_midi' | 'evaluation' | 'satisfaction_chaud' | 'satisfaction_froid';
  reponses: Record<string, any>;
  dateReponse: Date;
  adresseIP: string;
  metadonnees: Record<string, any>;
}

export interface AuthState {
  isAuthenticated: boolean;
  admin?: Admin;
}