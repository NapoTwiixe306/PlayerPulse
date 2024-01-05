import vita from '../img/Teams/vita.svg'

type TeamStats = {
  name: string;
  description: string;
  image: string;
};
type TeamsStats = Record<string, TeamStats>;

export const teamsStats: TeamsStats = {
  vitality: {
    name: "Team-Vitality",
    description: "Fondée en 2013, Team Vitality est une organisation d'esports européenne de premier plan, réputée pour ses performances exceptionnelles dans des jeux tels que League of Legends, Counter-Strike: Global Offensive et Rocket League. Arborant un logo en forme d'abeille et une couleur jaune distinctive, l'équipe incarne la passion et l'énergie. Ses membres, compétitifs et stratégiques, font de Vitality une force majeure dans l'esport, attirant un large public mondial grâce à leur excellence et leur engagement constant dans l'innovation.",
    image: vita,
  },
  kcorp: {
    name: "Karmine Corp",
    description: "Description de Karmine Corp...",
    image: "",
  },
  bds: {
    name: "BDS Esport",
    description: "Description de BDS Esport...",
    image: "",
  },
};
