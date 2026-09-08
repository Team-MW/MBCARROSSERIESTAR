export const site = {
  name: "MB Carrosserie Star",
  tagline: "Carrosserie · Peinture · Tôlerie · Mécanique",
  description:
    "Carrosserie, peinture, tôlerie et mécanique à Cornebarrieu. MB Carrosserie Star : devis, délais tenus, véhicule de prêt. 14 Chem. Saint-Roch — 07 66 57 39 76.",
  city: "Cornebarrieu",
  address: {
    street: "14 Chem. Saint-Roch",
    postalCode: "31700",
    city: "Cornebarrieu",
    full: "14 Chem. Saint-Roch, 31700 Cornebarrieu",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=14+Chem.+Saint-Roch+31700+Cornebarrieu",
    embedUrl:
      "https://maps.google.com/maps?q=14%20Chem.%20Saint-Roch%2C%2031700%20Cornebarrieu&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },
  email: "MbCarrosseriestar@gmail.com",
  phone: {
    display: "07 66 57 39 76",
    href: "tel:+33766573976",
  },
  hours: [
    { days: "Lun. – Ven.", hours: "9h – 18h" },
    { days: "Samedi", hours: "9h – 17h" },
    { days: "Dimanche", hours: "Fermé" },
  ],
  googleSearch:
    "https://www.google.com/search?q=MB+Carrosserie+Star+14+Chem.+Saint-Roch+Cornebarrieu+avis",
  jotformId: "262492672319363",
  tiktok: {
    handle: "mbcarrosseriestar31700",
    profileUrl: "https://www.tiktok.com/@mbcarrosseriestar31700",
    videos: [
      "7546552378103778582",
      "7681384903216270625",
      "7679150983217237280",
    ],
  },
  legal: {
    legalName: "MB CARROSSERIE STAR",
    tradeName: "MB CARROSSERIE STAR",
    status: "Active",
    legalForm: "SARL, société à responsabilité limitée",
    capital: "1 000,00 €",
    siren: "994 016 715",
    siret: "994 016 715 00017",
    tva: "FR12994016715",
    rcs: "994 016 715 R.C.S. Toulouse",
    rcsDate: "26/11/2025",
    rcsGreffe: "Toulouse",
    rne: "Inscrit",
    createdAt: "01/12/2025",
    director: "Onyeka Monday",
    directorRole: "Gérant",
    staff: "Au moins 1 salarié",
    activity:
      "Entretien et réparation de véhicules automobiles légers : carrosserie",
    otherActivities: "Mécanique automobile, achat-revente de véhicules",
    naf: "45.20A",
    nafLabel: "Entretien et réparation de véhicules automobiles légers",
    domain: "Commerce et réparation d'automobiles et de motocycles",
    idcc: "1090",
    idccLabel:
      "Services de l'automobile (commerce et réparation de l'automobile, du cycle et du motocycle, activités connexes, contrôle technique automobile, formation des conducteurs — auto-écoles CNPA)",
    yearEnd: "31/12/2026",
    legalAddress: "14 CHEMIN SAINT-ROCH, 31700 CORNEBARRIEU",
    updatedAt: "8 septembre 2026",
    host: {
      name: "Vercel Inc.",
      address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
      url: "https://vercel.com",
    },
  },
} as const;

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/prestations", label: "Prestations" },
  { href: "/atelier", label: "L'atelier" },
  { href: "/avis", label: "Avis" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    id: "carrosserie",
    title: "Carrosserie",
    text: "Chocs, bosses, ailes et pare-chocs : on redonne sa ligne à votre véhicule, du détail jusqu’aux gros sinistres.",
    points: [
      "Réparation de chocs avant / arrière",
      "Ailes, portes, capot, hayon",
      "Pare-chocs et éléments plastiques",
      "Remise en ligne après accident",
    ],
  },
  {
    id: "peinture",
    title: "Peinture",
    text: "Mise en teinte, cabine et vernis. Un rendu homogène, brillant, comme sortie d’usine.",
    points: [
      "Mise à la teinte constructeur",
      "Retouches et éléments complets",
      "Vernis brillant, rendu neuf",
      "Finition soignée des joints et bords",
    ],
  },
  {
    id: "tolerie",
    title: "Tôlerie",
    text: "Redressage, remplacement d’éléments et travail de la tôle pour une structure saine et durable.",
    points: [
      "Redressage de caisse",
      "Remplacement d’éléments",
      "Travail de structure",
      "Contrôle après choc important",
    ],
  },
  {
    id: "mecanique",
    title: "Mécanique",
    text: "Entretien, diagnostic et réparations courantes pour repartir en confiance après le passage à l’atelier.",
    points: [
      "Diagnostic et entretien",
      "Réparations courantes",
      "Contrôle après sinistre",
      "Remise en route du véhicule",
    ],
  },
] as const;

export const strengths = [
  {
    title: "Qualité d’atelier",
    text: "Peinture impeccable, finitions soignées, résultat « comme neuf » — le fil rouge de nos avis clients.",
  },
  {
    title: "Délais tenus",
    text: "Devis clair, planning respecté. Plusieurs clients soulignent des réparations rendues en 48 h.",
  },
  {
    title: "Prix honnête",
    text: "Devis transparent, bon rapport qualité-prix, sans mauvaise surprise à la remise du véhicule.",
  },
  {
    title: "Équipe à l’écoute",
    text: "Monday, Menaouer et l’atelier vous expliquent le chantier et suivent votre dossier jusqu’au bout.",
  },
] as const;

export const reviews = [
  {
    name: "Aurélien TOUYRAC",
    when: "il y a 6 mois",
    visit: "Visité en février",
    text: "Je recommande fortement !",
  },
  {
    name: "Harouna Sylla",
    when: "il y a 7 mois",
    visit: "Visité en janvier",
    text: "Excellent carrossier ! Travail de grande qualité, délais respectés et très bon rapport qualité-prix. Équipe sérieuse et sympathique. Résultat parfait, merci encore !",
  },
  {
    name: "Kévin Bizon",
    when: "il y a un mois",
    visit: "Visité en juillet",
    text: "Je recommande MB Star Auto à 100 % !",
  },
  {
    name: "Bassem Rachdi",
    when: "il y a 7 mois",
    visit: "Visité en janvier",
    text: "Carrossier très sérieux et compétent. Les réparations ont été faites avec soin, la peinture est impeccable et le résultat est comme neuf. Bon accueil et explications claires. Merci pour le professionnalisme.",
  },
  {
    name: "Manon R",
    when: "il y a 6 mois",
    visit: "Visité en février",
    text: "Rapide, efficace, prix honnête. Réparation sur C3 endommagée à l’avant. Devis rapide et transparent.",
  },
  {
    name: "Hallak Chaouki",
    when: "il y a 7 mois",
    visit: "Visité en janvier",
    text: "Je recommande, personnel agréable et à l’écoute, travail rapide et soigné. Très bon garage 👌",
  },
  {
    name: "AMO automobile",
    when: "il y a 7 mois",
    visit: "Visité en janvier",
    text: "Carrossier compétent sérieux. Vous pouvez aller les yeux fermés.",
  },
  {
    name: "Ramzi Dani",
    when: "il y a 7 mois",
    visit: "Visité en janvier",
    text: "J’ai déposé ma Renault Clio 5 complètement explosée ici, le véhicule était complètement aplati à l’avant. Selon plusieurs carrossiers, c’était un chantier trop lourd.",
  },
  {
    name: "Kamil Sadji",
    when: "il y a 7 mois",
    visit: "Visité en janvier",
    text: "Un service très efficace, je recommande d’aller chez MB Carrosserie Star.",
  },
  {
    name: "manouar icloud",
    when: "il y a 7 mois",
    visit: "Visité en janvier",
    text: "Personnel très compétent, prix intéressant, travail rapide.",
  },
  {
    name: "Hamza Hassanaly",
    when: "il y a 5 mois",
    visit: "Visité en avril",
    text: "La qualité du travail est exceptionnelle. Merci à Menaouer et à Monday qui sont vraiment méticuleux dans leur travail.",
  },
  {
    name: "sébastien Bordes",
    when: "il y a 2 semaines",
    visit: "Visité en août",
    text: "Rapide, sérieux, travail de qualité, engagements tenus pour les délais. Bravo !",
  },
  {
    name: "Kevin Fabre",
    when: "il y a 2 semaines",
    visit: "Visité en août",
    text: "Professionnel, rapide.",
  },
  {
    name: "Erwane Dolianki",
    when: "il y a 1 mois",
    visit: "Visité en août",
    text: "Excellent garage, franchement je recommande grave.",
  },
  {
    name: "Laurent Rivière",
    when: "il y a 1 mois",
    visit: "Visité en août",
    text: "Très bon travail, sérieux.",
  },
  {
    name: "Desire Faith",
    when: "il y a 7 mois",
    visit: "Visité en janvier",
    text: "They do a good job for me. I drop my Renault Clio 4 for 2 days, they finish the car. I really appreciate MB Carrosserie Star ❤️❤️❤️",
  },
] as const;

export const faqs = [
  {
    q: "Comment obtenir un devis ?",
    a: "Remplissez le formulaire sur la page Contact, envoyez des photos par e-mail, ou appelez-nous. On vous explique le chantier et le tarif avant de commencer.",
  },
  {
    q: "Faut-il prendre rendez-vous ?",
    a: "Oui, c’est plus simple pour caler le dépôt du véhicule. Un appel ou un message suffit : on vous confirme un créneau.",
  },
  {
    q: "Quels sont les horaires de l’atelier ?",
    a: "Lundi à vendredi de 9h à 18h, samedi de 9h à 17h. Fermé le dimanche.",
  },
  {
    q: "Où se trouve MB Carrosserie Star ?",
    a: "14 Chem. Saint-Roch, 31700 Cornebarrieu, aux portes de Toulouse.",
  },
  {
    q: "Combien de temps dure une réparation ?",
    a: "Ça dépend du choc. Une retouche peut se faire en 24 à 48 h ; un gros sinistre demande plus de temps. Le délai vous est annoncé au devis, et on le tient.",
  },
  {
    q: "Travaillez-vous avec les assurances ?",
    a: "Oui. Apportez votre constat et les références du dossier : on vous oriente pour la prise en charge.",
  },
  {
    q: "Quels véhicules prenez-vous en charge ?",
    a: "Les véhicules légers : citadines, berlines, SUV. Carrosserie, peinture, tôlerie et mécanique.",
  },
  {
    q: "Puis-je envoyer des photos avant de passer ?",
    a: "Oui. Photos du choc (plusieurs angles) + le modèle du véhicule : on peut déjà vous donner une première idée du devis.",
  },
] as const;
