const storyData = {
  start: {
    id: 'start',
    text: 'Du sidder på en Café hvor du skal bruge internet. Går du på caféens gratis Wifi eller gør du brug af dit eget mobildata?',
    imgUrl: './imgs/café.jpg',
    options: [
      { text: 'Forbind til det offentlige wifi', next: 'wifiWarning' },
      { text: 'Forbind til dit eget mobildata', next: 'secureConnection' },
    ],
  },

  wifiWarning: {
    id: 'wifiWarning',
    text: 'Forbindelsen er usikker. Tjekker du din bankkonto eller kigger du bare nyheder?',
    imgUrl: './imgs/wifi.jpg',
    options: [
      { text: 'Tjek netbank', next: 'hacked' },
      { text: 'Kigger nyheder', next: 'phishingEmail' },
    ],
  },

  phishingEmail: {
    id: 'phishingEmail',
    text: "Du modtager en email fra din 'bank' der beder dig om at verificere dit login. Hvad gør du?",
    imgUrl: './imgs/phising.jpg',
    options: [
      { text: 'Klik på linket og log ind', next: 'phished' },
      { text: 'Ignorer emailen', next: 'secureConnection' },
    ],
  },

  hacked: {
    id: 'hacked',
    text: 'Du er blevet hacket! Nogen har stjålet dine legitimationsoplysninger.',
    imgUrl: './imgs/hacker.jpg',
    ending: true,
  },

  secureConnection: {
    id: 'secureConnection',
    text: 'Godt valg! du har formået at beskytte dine data.',
    imgUrl: './imgs/safe.jpg',
    ending: true,
  },

  phished: {
    id: 'phished',
    text: 'Ups! Det var en phishing email. Din konto er blevet kompromitteret.',
    imgUrl: './imgs/hacker.jpg',
    ending: true,
  },
};
