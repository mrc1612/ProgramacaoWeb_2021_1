export const themes = {
  light: {
    blue: '#062F4F',
    black: '#262228',
    white: '#F4F4F4',
  },
  dark: {
    blue: '#262228',
    black: '#0E0B16',
    white: '#F4F4F4',

    Evening: '#262228',
    Charcoal: '#373737',
    Void: '#0E0B16',
    IvoryBlack: '#1D2731',
    Matte: '#414141',
    Paper: '#F4F4F4',
    Screen: '#C5C1C0',
    Eggshell: '#F5F5F5',

    StarryNight: '#0375B4',
    Teal: '#07889B',
    Ink: '#062F4F',
    Aqua: '#008F95',
    Cerulean: '#4484CE',
    PrussianBlue: '#0B3C5D',
    SkyBlue: '#328CC1',
    SummerSky: '#286DA8',
    Feather: '#77C9D4',
    Azure: '#01ABAA',
    Cyan: '#43C0F6',
    Electric: '#4CDEF5',
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
