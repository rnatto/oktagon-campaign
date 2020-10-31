import { createMuiTheme } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

export type Color =
  | 'primary'
  | 'secondary'
  | 'light'
  | 'grey'
  | 'lightGrey'
  | 'darkSuccess'
  | 'success'
  | 'lightSuccess'
  | 'info'
  | 'error'
  | 'shadow'
  | 'contrast';
const Colors = {
  primary: '#01183C',
  secondary: '#1580ED',
  light: '#FFFFFF',
  grey: '#808384',
  lightGrey: '#D1D9DB',
  darkSuccess: '#0340DC',
  success: '#0080ED',
  lightSuccess: '#48A2F0',
  info: '#1EBFB8',
  error: '#FD6069',
  shadow: '#00000080',
  contrast: '#fff',
};

const Metrics = {
  padding: 8,
  margin: 8,
  borderRadius: 8,
  headerHeight: 100,
  sidebarWidth: 200,
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};
const breakpoints = createBreakpoints({});

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    success: {
      light: Colors.lightSuccess,
      main: Colors.success,
      dark: Colors.darkSuccess,
    },
    info: {
      main: Colors.info,
    },
    warning: {
      light: Colors.lightGrey,
      main: Colors.grey,
    },
    error: {
      main: Colors.error,
    },
    text: {
      secondary: Colors.contrast,
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'IBM Plex Sans, sans-serif',
    },
    h1: {
      fontWeight: 'bold',
      fontFamily: 'Barlow, sans-serif',
      fontSize: 'calc(33px + (53 - 33) * ((100vw - 320px) / (1366 - 320)))',
      lineHeight: 'calc(40px + (64 - 40) * ((100vw - 320px) / (1366 - 320)))',
      [breakpoints.up(1366)]: {
        fontSize: '53px',
        lineHeight: '64px',
      },
      color: '#fff',
    },
    h2: {
      fontSize: 'calc(33px + (47 - 33) * ((100vw - 320px) / (1366 - 320)))',
      lineHeight: 'calc(40px + (43 - 40) * ((100vw - 320px) / (1366 - 320)))',
      [breakpoints.up(1366)]: {
        fontSize: '53px',
        lineHeight: '64px',
      },
      fontFamily: 'Barlow, sans-serif',
      letterSpacing: '-1.18px',
      fontWeight: 'bolder',
    },
    h4: {
      fontSize: 31,
      lineHeight: '37px',
      fontFamily: 'Barlow, sans-serif',
      letterSpacing: '-.78px',
      fontWeight: 'bold',
    },
    overline: {
      fontSize: 11,
      lineHeight: '13px',
      letterSpacing: '1.1px',
      fontWeight: 'bold',
    },
    subtitle1: {
      fontFamily: 'Barlow, sans-serif',
    },
    caption: {
      fontStyle: 'italic',
      fontFamily: 'IBM Plex Sans, sans-serif',
      fontSize: '13px',
      lineHeight: '17px',
    },
    button: {
      fontSize: '13px',
      lineHeight: '16px',
      fontWeight: 'bold',
      fontFamily: 'Barlow, sans-serif',
    },
  },
  overrides: {
    MuiFormLabel: {
      root: {
        color: Colors.grey,
      },
    },
    MuiTextField: {
      root: {
        marginTop: Metrics.margin,
        marginBottom: Metrics.margin,
      },
    },
    MuiSelect: {
      filled: {
        background: Colors.contrast,
        width: 300,
        borderRadius: 5,
      },
    },
    MuiFilledInput: {
      root: {
        background: `${Colors.contrast} !important`,
        width: 300,
        borderRadius: 5,
      },
    },
    MuiButton: {
      text: {
        color: 'white',
      },
      containedSecondary: {
        '&:disabled': {
          color: Colors.contrast,
          background: Colors.grey,
        },
      },
      sizeLarge: {
        fontSize: '13px',
        lineHeight: '16px',
        fontWeight: 'bold',
        fontFamily: 'Barlow, sans-serif',
        padding: '15px 44px',
      },
      sizeSmall: {
        fontSize: '13px',
        lineHeight: '16px',
        fontWeight: 'bold',
        fontFamily: 'Barlow, sans-serif',
        padding: '15px 30px',
      },
      outlinedPrimary: {
        color: 'white',
        border: `2px solid ${Colors.primary}`,
        '&:hover': {
          border: `2px solid ${Colors.success}`,
        },
      },
      outlinedSecondary: {
        color: 'white',
        border: `2px solid ${Colors.secondary}`,
        '&:hover': {
          border: `2px solid ${Colors.lightSuccess}`,
        },
      },
    },
    MuiAppBar: {
      colorDefault: {
        backgroundColor: 'transparent',
        color: '#fff',
        boxShadow: 'none',
      },
    },
    MuiPaper: {
      elevation0: {
        boxShadow: `0px 2px 4px ${Colors.shadow}`,
      },
      elevation1: {
        boxShadow: `0px 5px 8px ${Colors.shadow}`,
      },
      elevation2: {
        boxShadow: `0px 9px 10px ${Colors.shadow}`,
      },
      elevation3: {
        boxShadow: `0px 20px 30px ${Colors.shadow}`,
      },
      elevation4: {
        boxShadow: `0px 30px 30px ${Colors.shadow}`,
      },
      elevation5: {
        boxShadow: `0px 50px 50px ${Colors.shadow}`,
      },
    },
    MuiAccordion: {
      root: {
        background: 'transparent',
        boxShadow: 'unset',
      },
    },
    MuiAccordionSummary: {
      root: {
        background: 'transparent',
        color: `${Colors.primary}px`,
      },
    },
  },
});

export { Colors, Metrics };
