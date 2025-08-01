import { Admin, Entreprise, Referent, Stagiaire, Formateur, Formation, Parcours, Session, QuestionnaireReponse } from '@/types';

export const mockAdmins: Admin[] = [
  {
    id: '1',
    nom: 'Dubois',
    prenom: 'Marie',
    email: 'marie.dubois@formation-center.fr',
    role: 'Directrice pédagogique',
    validated: true,
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    nom: 'Martin',
    prenom: 'Pierre',
    email: 'pierre.martin@formation-center.fr',
    role: 'Coordinateur formations',
    validated: true,
    createdAt: new Date('2024-02-10')
  }
];

export const mockEntreprises: Entreprise[] = [
  {
    id: '1',
    nom: 'TechCorp Solutions',
    email: 'contact@techcorp.fr',
    telephone: '01 23 45 67 89',
    adresse: '123 Avenue des Champs-Élysées, 75008 Paris',
    statut: 'active',
    createdAt: new Date('2024-01-20')
  },
  {
    id: '2',
    nom: 'Digital Innovations',
    email: 'rh@digital-innovations.fr',
    telephone: '04 56 78 90 12',
    adresse: '45 Rue de la République, 69002 Lyon',
    statut: 'active',
    createdAt: new Date('2024-02-05')
  },
  {
    id: '3',
    nom: 'StartUp Bretonne',
    email: 'formation@startup-bretonne.fr',
    telephone: '02 98 76 54 32',
    adresse: '12 Place du Commerce, 29000 Brest',
    statut: 'inactive',
    createdAt: new Date('2024-01-30')
  }
];

export const mockReferents: Referent[] = [
  {
    id: '1',
    entrepriseId: '1',
    nom: 'Leroy',
    email: 'sophie.leroy@techcorp.fr',
    telephone: '01 23 45 67 90',
    roleEntreprise: 'Responsable RH',
    createdAt: new Date('2024-01-22')
  },
  {
    id: '2',
    entrepriseId: '2',
    nom: 'Moreau',
    email: 'julien.moreau@digital-innovations.fr',
    telephone: '04 56 78 90 13',
    roleEntreprise: 'Chef de projet formation',
    createdAt: new Date('2024-02-07')
  },
  {
    id: '3',
    entrepriseId: '1',
    nom: 'Bernard',
    email: 'claire.bernard@techcorp.fr',
    telephone: '01 23 45 67 91',
    roleEntreprise: 'Manager équipe développement',
    createdAt: new Date('2024-02-15')
  }
];

export const mockStagiaires: Stagiaire[] = [
  {
    id: '1',
    referentId: '1',
    nom: 'Dupont',
    email: 'jean.dupont@techcorp.fr',
    telephone: '06 12 34 56 78',
    createdAt: new Date('2024-02-01')
  },
  {
    id: '2',
    referentId: '1',
    nom: 'Lemoine',
    email: 'alice.lemoine@techcorp.fr',
    telephone: '06 23 45 67 89',
    createdAt: new Date('2024-02-02')
  },
  {
    id: '3',
    referentId: '2',
    nom: 'Roux',
    email: 'paul.roux@digital-innovations.fr',
    telephone: '06 34 56 78 90',
    createdAt: new Date('2024-02-10')
  },
  {
    id: '4',
    referentId: '2',
    nom: 'Blanc',
    email: 'emilie.blanc@digital-innovations.fr',
    telephone: '06 45 67 89 01',
    createdAt: new Date('2024-02-11')
  },
  {
    id: '5',
    referentId: '3',
    nom: 'Garnier',
    email: 'thomas.garnier@techcorp.fr',
    telephone: '06 56 78 90 12',
    createdAt: new Date('2024-02-18')
  }
];

export const mockFormateurs: Formateur[] = [
  {
    id: '1',
    nom: 'Dr. Amélie Rousseau',
    email: 'amelie.rousseau@formation-center.fr',
    domaineFormation: 'Développement Web & Applications',
    createdAt: new Date('2024-01-10')
  },
  {
    id: '2',
    nom: 'Marc Fontaine',
    email: 'marc.fontaine@formation-center.fr',
    domaineFormation: 'Management & Leadership',
    createdAt: new Date('2024-01-12')
  },
  {
    id: '3',
    nom: 'Sarah Chen',
    email: 'sarah.chen@formation-center.fr',
    domaineFormation: 'Intelligence Artificielle & Data Science',
    createdAt: new Date('2024-01-15')
  },
  {
    id: '4',
    nom: 'Philippe Mercier',
    email: 'philippe.mercier@formation-center.fr',
    domaineFormation: 'Cybersécurité & Réseaux',
    createdAt: new Date('2024-01-18')
  }
];

export const mockFormations: Formation[] = [
  {
    id: '1',
    nom: 'React & TypeScript Avancé',
    lieu: 'Centre de formation Paris',
    description: 'Formation complète sur React et TypeScript pour le développement d\'applications modernes. Couvre les hooks avancés, l\'architecture d\'applications et les bonnes pratiques.',
    duree: 35,
    createdAt: new Date('2024-01-20')
  },
  {
    id: '2',
    nom: 'Leadership Digital',
    lieu: 'Centre de formation Lyon',
    description: 'Développer ses compétences de leadership dans un environnement digital. Gestion d\'équipes hybrides, communication digitale et transformation organisationnelle.',
    duree: 21,
    createdAt: new Date('2024-01-25')
  },
  {
    id: '3',
    nom: 'Introduction à l\'IA Générative',
    lieu: 'Centre de formation Paris',
    description: 'Découvrir les outils d\'IA générative et leur application en entreprise. ChatGPT, DALL-E, automatisation des tâches et éthique de l\'IA.',
    duree: 14,
    createdAt: new Date('2024-02-01')
  },
  {
    id: '4',
    nom: 'Sécurité des Applications Web',
    lieu: 'Centre de formation Lille',
    description: 'Sécuriser les applications web contre les vulnérabilités courantes. OWASP Top 10, tests de sécurité, et mise en place de bonnes pratiques.',
    duree: 28,
    createdAt: new Date('2024-02-05')
  }
];

export const mockParcours: Parcours[] = [
  {
    id: '1',
    nom: 'Développeur Full-Stack',
    dureeJours: 5,
    createdAt: new Date('2024-01-20')
  },
  {
    id: '2',
    nom: 'Manager Digital',
    dureeJours: 3,
    createdAt: new Date('2024-01-25')
  },
  {
    id: '3',
    nom: 'Spécialiste IA',
    dureeJours: 2,
    createdAt: new Date('2024-02-01')
  },
  {
    id: '4',
    nom: 'Expert Cybersécurité',
    dureeJours: 4,
    createdAt: new Date('2024-02-05')
  }
];

export const mockSessions: Session[] = [
  {
    id: '1',
    formationId: '1',
    parcoursId: '1',
    formateurId: '1',
    dateDebut: new Date('2024-03-15T09:00:00'),
    dateFin: new Date('2024-03-19T17:00:00'),
    stagiaires: ['1', '2', '5'],
    statut: 'programme',
    createdAt: new Date('2024-02-20')
  },
  {
    id: '2',
    formationId: '2',
    parcoursId: '2',
    formateurId: '2',
    dateDebut: new Date('2024-03-10T09:00:00'),
    dateFin: new Date('2024-03-12T17:00:00'),
    stagiaires: ['3', '4'],
    statut: 'en_cours',
    createdAt: new Date('2024-02-25')
  },
  {
    id: '3',
    formationId: '3',
    parcoursId: '3',
    formateurId: '3',
    dateDebut: new Date('2024-02-20T09:00:00'),
    dateFin: new Date('2024-02-21T17:00:00'),
    stagiaires: ['1', '3', '4', '5'],
    statut: 'termine',
    createdAt: new Date('2024-02-10')
  },
  {
    id: '4',
    formationId: '4',
    parcoursId: '4',
    formateurId: '4',
    dateDebut: new Date('2024-04-08T09:00:00'),
    dateFin: new Date('2024-04-11T17:00:00'),
    stagiaires: ['2', '3'],
    statut: 'programme',
    createdAt: new Date('2024-03-01')
  }
];

export const mockQuestionnaires: QuestionnaireReponse[] = [
  {
    id: '1',
    sessionId: '3',
    stagiaireId: '1',
    type: 'positionnement',
    reponses: {
      'experience_ia': 'debutant',
      'objectifs': 'Comprendre les bases de l\'IA générative',
      'attentes': 'Apprendre à utiliser ChatGPT efficacement'
    },
    dateReponse: new Date('2024-02-20T09:15:00'),
    adresseIP: '192.168.1.100',
    metadonnees: { userAgent: 'Mozilla/5.0...', device: 'desktop' }
  },
  {
    id: '2',
    sessionId: '3',
    stagiaireId: '1',
    type: 'satisfaction_chaud',
    reponses: {
      'satisfaction_globale': 5,
      'qualite_contenu': 4,
      'pedagogie_formateur': 5,
      'commentaires': 'Excellente formation, très pratique'
    },
    dateReponse: new Date('2024-02-21T17:30:00'),
    adresseIP: '192.168.1.100',
    metadonnees: { userAgent: 'Mozilla/5.0...', device: 'desktop' }
  }
];