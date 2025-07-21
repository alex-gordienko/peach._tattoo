const firebaseConfig = {
  apiKey: "AIzaSyCLIXv3RqPyfZ8IvpQ2eeeZ99OhetJdDLg",
  authDomain: "peach-tattoo.firebaseapp.com",
  projectId: "peach-tattoo",
  storageBucket: "peach-tattoo.appspot.com",
  messagingSenderId: "781081206575",
  appId: "1:781081206575:web:04575c7a7e2795c9740bda",
  measurementId: "G-X95BY8Q4WX",
};

// Themes
const THEMES = {
  DEFAULT: "DEFAULT",
  DARK: "DARK",
  LIGHT: "LIGHT",
  BLUE: "BLUE",
  GREEN: "GREEN",
  INDIGO: "INDIGO",
  PINK_BLACK: "PINK_BLACK",
};

const availableRoutes = {
  PUBLIC: {
    PATH: "/",
  },
};

const socialLinks = {
  INSTAGRAM: "https://ig.me/m/peach_.tattoo/",
  WHATSAPP: "https://wa.me/4915157952788",
  TELEGRAM: "https://t.me/k_kotika",
};
export { availableRoutes, firebaseConfig, THEMES, socialLinks };
