import merge from "deepmerge";
import { green, grey, indigo, red } from "@mui/material/colors";
import { THEMES } from "../constants";

const customBlue = {
  50: "#e9f0fb",
  100: "#c8daf4",
  200: "#a3c1ed",
  300: "#7ea8e5",
  400: "#6395e0",
  500: "#4782da",
  600: "#407ad6",
  700: "#376fd0",
  800: "#2f65cb",
  900: "#2052c2 ",
};

const defaultVariant = {
  name: THEMES.DEFAULT,
  palette: {
    mode: "light",
    primary: {
      main: customBlue[700],
      contrastText: "#FFF",
    },
    secondary: {
      main: customBlue[500],
      contrastText: "#FFF",
    },
    background: {
      default: "#F7F9FC",
      paper: "#FFF",
    },
  },
  header: {
    color: grey[500],
    background: "#FFF",
    search: {
      color: grey[800],
    },
    indicator: {
      background: customBlue[600],
    },
  },
  footer: {
    color: grey[500],
    background: "#FFF",
  },
  sidebar: {
    color: grey[200],
    background: "#233044",
    header: {
      color: grey[200],
      background: "#233044",
      brand: {
        color: customBlue[500],
      },
    },
    footer: {
      color: grey[200],
      background: "#1E2A38",
      online: {
        background: green[500],
      },
    },
    badge: {
      color: "#FFF",
      background: customBlue[500],
    },
  },
};

const darkVariant = merge(defaultVariant, {
  name: THEMES.DARK,
  palette: {
    mode: "dark",
    primary: {
      main: customBlue[600],
      contrastText: "#FFF",
    },
    background: {
      default: "#1B2635",
      paper: "#233044",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.95)",
      secondary: "rgba(255, 255, 255, 0.5)",
    },
  },
  header: {
    color: grey[300],
    background: "#1B2635",
    search: {
      color: grey[200],
    },
  },
  footer: {
    color: grey[300],
    background: "#233044",
  },
});

const lightVariant = merge(defaultVariant, {
  name: THEMES.LIGHT,
  palette: {
    mode: "light",
  },
  header: {
    color: grey[200],
    background: customBlue[800],
    search: {
      color: grey[100],
    },
    indicator: {
      background: red[700],
    },
  },
  sidebar: {
    color: grey[900],
    background: "#FFF",
    header: {
      color: "#FFF",
      background: customBlue[800],
      brand: {
        color: "#FFFFFF",
      },
    },
    footer: {
      color: grey[800],
      background: "#F7F7F7",
      online: {
        background: green[500],
      },
    },
  },
});

const blueVariant = merge(defaultVariant, {
  name: THEMES.BLUE,
  palette: {
    mode: "light",
  },
  sidebar: {
    color: "#FFF",
    background: customBlue[700],
    header: {
      color: "#FFF",
      background: customBlue[800],
      brand: {
        color: "#FFFFFF",
      },
    },
    footer: {
      color: "#FFF",
      background: customBlue[800],
      online: {
        background: "#FFF",
      },
    },
    badge: {
      color: "#000",
      background: "#FFF",
    },
  },
});

const greenVariant = merge(defaultVariant, {
  name: THEMES.GREEN,
  palette: {
    primary: {
      main: green[800],
      contrastText: "#FFF",
    },
    secondary: {
      main: green[500],
      contrastText: "#FFF",
    },
  },
  header: {
    indicator: {
      background: green[600],
    },
  },
  sidebar: {
    color: "#FFF",
    background: green[700],
    header: {
      color: "#FFF",
      background: green[800],
      brand: {
        color: "#FFFFFF",
      },
    },
    footer: {
      color: "#FFF",
      background: green[800],
      online: {
        background: "#FFF",
      },
    },
    badge: {
      color: "#000",
      background: "#FFF",
    },
  },
});

const indigoVariant = merge(defaultVariant, {
  name: THEMES.INDIGO,
  palette: {
    primary: {
      main: indigo[600],
      contrastText: "#FFF",
    },
    secondary: {
      main: indigo[400],
      contrastText: "#FFF",
    },
  },
  header: {
    indicator: {
      background: indigo[600],
    },
  },
  sidebar: {
    color: "#FFF",
    background: indigo[700],
    header: {
      color: "#FFF",
      background: indigo[800],
      brand: {
        color: "#FFFFFF",
      },
    },
    footer: {
      color: "#FFF",
      background: indigo[800],
      online: {
        background: "#FFF",
      },
    },
    badge: {
      color: "#000",
      background: "#FFF",
    },
  },
});

const deepPink = {
  50: "#ffe6f0",
  100: "#ffb3d1",
  200: "#ff80b3",
  300: "#ff4d94",
  400: "#ff267a",
  500: "#ff0060",
  600: "#e60056",
  700: "#b30043",
  800: "#800030",
  900: "#4d001c",
};
const pinkBlackGradient = "linear-gradient(90deg, #232323 0%,rgb(159, 14, 69) 100%)";
const pinkBlackGradientSoft =
  "linear-gradient(120deg, #232323 0%,rgb(141, 1, 52) 70%, #ff267a 100%)";
const pinkBlackGradientFooter =
  "linear-gradient(90deg, #232323 0%, #800030 60%, #ff267a 100%)";
const pinkBlackGradientButton =
  "linear-gradient(90deg, #ff267a 0%, #232323 100%)";
const pinkBlackGradientCard =
  "linear-gradient(135deg, #232323 0%, #ff80b3 100%)";
const pinkBlackVariant = merge(defaultVariant, {
  name: THEMES.PINK_BLACK,
  palette: {
    mode: "dark",
    primary: {
      main: deepPink[500],
      contrastText: "#FFF",
    },
    secondary: {
      main: deepPink[300],
      contrastText: "#FFF",
    },
    background: {
      default: pinkBlackGradientSoft,
      paper: pinkBlackGradientCard,
    },
    text: {
      primary: "#FFF",
      secondary: deepPink[200],
    },
  },
  header: {
    color: deepPink[100],
    background: pinkBlackGradient,
    search: {
      color: deepPink[50],
    },
    indicator: {
      background: deepPink[500],
    },
  },
  footer: {
    color: deepPink[100],
    background: pinkBlackGradientFooter,
  },
  sidebar: {
    color: "#FFF",
    background: pinkBlackGradientSoft,
    header: {
      color: deepPink[100],
      background: pinkBlackGradient,
      brand: {
        color: deepPink[500],
      },
    },
    footer: {
      color: deepPink[100],
      background: pinkBlackGradientFooter,
      online: {
        background: deepPink[500],
      },
    },
    badge: {
      color: "#FFF",
      background: pinkBlackGradientButton,
    },
  },
  button: {
    background: pinkBlackGradientButton,
    color: "#FFF",
  },
  card: {
    background: pinkBlackGradientCard,
    color: "#FFF",
  },
});

const variants: Array<VariantType> = [
  defaultVariant,
  darkVariant,
  lightVariant,
  blueVariant,
  greenVariant,
  indigoVariant,
  pinkBlackVariant,
];

export default variants;

export type VariantType = {
  name: string;
  palette: {
    primary: MainContrastTextType;
    secondary: MainContrastTextType;
  };
  header: ColorBgType & {
    search: {
      color: string;
    };
    indicator: {
      background: string;
    };
  };
  footer: ColorBgType;
  sidebar: ColorBgType & {
    header: ColorBgType & {
      brand: {
        color: string;
      };
    };
    footer: ColorBgType & {
      online: {
        background: string;
      };
    };
    badge: ColorBgType;
  };
};

type MainContrastTextType = {
  main: string;
  contrastText: string;
};
type ColorBgType = {
  color: string;
  background: string;
};
