// ads.js - Colección de anuncios para HistòriaLab con enlaces obligatorios
window.AdsBank = {
  banners728: [
    {
      id: 1,
      title: "Terror Les Conserves 2026",
      subtitle: "Passatge del Terror a Molins de Rei",
      bg: "bg-gradient-to-r from-purple-600 to-pink-600",
      textColor: "text-white",
      badge: "Patrocinat",
      btnText: "Aconsegueix les entrades",
      icon: "fa-skull-crossbones",
      url: "https://ja.cat/terrorlesconserves"
    },
    {
      id: 2,
      title: "Practica Fonètica",
      subtitle: "La nova aplicació de fonètica ja disponible.",
      bg: "bg-gradient-to-r from-emerald-600 to-teal-700",
      textColor: "text-white",
      badge: "Novetat",
      btnText: "Veure Ara",
      icon: "fa-book-open",
      url: "https://pbfedu.github.io/afi"
    },
    {
      id: 4,
      title: "Practica Funcions",
      subtitle: "La nova aplicació de fonètica ja disponible.",
      bg: "bg-gradient-to-r from-red-600 to-brown-700",
      textColor: "text-white",
      badge: "Novetat",
      btnText: "Veure Ara",
      icon: "fa-book-open",
      url: "https://pbfedu.github.io/functio"
    },
    {
      id: 3,
      title: "Associació Juvenil El Rusc",
      subtitle: "Segueix-nos a Instagram",
      bg: "bg-gradient-to-r from-amber-500 to-orange-600",
      textColor: "text-white",
      badge: "Patrocinat",
      btnText: "Seguir",
      icon: "fa-instagram",
      url: "https://instagram.com/somelrusc"
    },
    {
      id: 5,
      title: "Actualitza a PRO",
      subtitle: "Sense Anuncis, Sense Límits",
      bg: "bg-gradient-to-r from-purple-600 to-pink-600",
      textColor: "text-white",
      badge: "Patrocinat",
      btnText: "Fes Upgrade ara",
      icon: "fa-star",
      url: "#"
    },
  ],
  banners300: [
    {
      id: 1,
      title: "Terror Les Conserves 2026",
      desc: "Passatge del Terror a Molins de Rei",
      bg: "bg-gradient-to-r from-purple-600 to-pink-600",
      btnText: "Aconsegueix les entrades",
      icon: "fa-skull-crossbones",
      url: "https://ja.cat/terrorlesconserves"
    },
    {
      id: 2,
      title: "Practica Fonètica",
      desc: "La nova aplicació de fonètica ja disponible.",
      bg: "bg-gradient-to-r from-emerald-600 to-teal-700",
      btnText: "Veure Ara",
      icon: "fa-book-open",
      url: "https://pbfedu.github.io/afi"
    },
     {id: 3,
      title: "Associació Juvenil El Rusc",
      desc: "Segueix-nos a Instagram.",
      bg: "bg-gradient-to-r from-amber-500 to-orange-600",
      btnText: "Seguir",
      icon: "fa-hexagon",
      url: "https://instagram.com/somelrusc"
    },
    {
      id: 4,
      title: "Practica Funcions",
      desc: "La nova aplicació de funcions ja disponible.",
      bg: "bg-gradient-to-r from-red-600 to-brown-700",
      btnText: "Veure Ara",
      icon: "fa-book-open",
      url: "https://pbfedu.github.io/functio"
    },
    {
      id: 5,
      title: "Actualitza a PRO",
      desc: "Sense Anuncis, Sense Límits",
      bg: "bg-gradient-to-r from-purple-600 to-pink-600",
      btnText: "Fes Upgrade",
      icon: "fa-star",
      url: "#"
    },
  ],
  interstitials: [
    {
      id: 1,
      brand: "Terror Les Conserves 2026",
      title: "Passatge del Terror a Molins de Rei",
      desc: "Aconsegueix les teves entrades el 24 d'octubre!!!",
      icon: "fa-skull-crossbones",
      url: "https://ja.cat/terrorlesconserves"
    },
    {
      id: 2,
      brand: "Història Lab",
      title: "Actualitza a PRO",
      desc: "Sense Anuncis, Sense Límits.",
      icon: "fa-star",
      url: "#"
    },
    {
      id: 3,
      brand: "@somelrusc",
      title: "Associació Juvenil El Rusc",
      desc: "Segueix-nos a Instagram",
      icon: "fa-clock-rotate-left",
      url: "https://instagram.com/somelrusc"
    },
    {
      id: 4,
      brand: "Functio",
      title: "Practica Funcions",
      desc: "Nova app per a practicar les funcions",
      icon: "fa-book-open",
      url: "https://pbfedu.github.io/functio"
    },
    {
      id: 5,
      brand: "Fonètica",
      title: "Practica Fonètica",
      desc: "Nova app per a practicar la fonètica",
      icon: "fa-book-open",
      url: "https://pbfedu.github.io/afi"
    },
  ]
};

window.getRandomAd728 = function() {
  const ads = window.AdsBank.banners728;
  return ads[Math.floor(Math.random() * ads.length)];
};

window.getRandomAd300 = function() {
  const ads = window.AdsBank.banners300;
  return ads[Math.floor(Math.random() * ads.length)];
};

window.getRandomInterstitialAd = function() {
  const ads = window.AdsBank.interstitials;
  return ads[Math.floor(Math.random() * ads.length)];
};
