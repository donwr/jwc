const colors = {
  black: '#0D0D0D',
  white: '#ffffff',
  green: '#00ff6a',
  darkGreen: '#098E27',
  red: '#e30613',
  accent: '#C8A961',
  charcoal: '#1A1A2E',
  navy: '#16213E',
}

const themes = {
  light: {
    primary: colors.white,
    secondary: colors.black,
    contrast: colors.red,
  },
  dark: {
    primary: colors.black,
    secondary: colors.white,
    contrast: colors.green,
  },
  red: {
    primary: colors.red,
    secondary: colors.black,
    contrast: colors.white,
  },
  green: {
    primary: colors.green,
    secondary: colors.black,
    contrast: colors.white,
  },
}

const breakpoints = {
  xs: '320px', // Extra small devices (phones, portrait mode)
  sm: '576px', // Small devices (phones)
  md: '768px', // Medium devices (tablets)
  lg: '992px', // Large devices (desktops, small laptops)
  xl: '1200px', // Extra large devices (large desktops)
  xxl: '1400px', // Extra extra large devices (larger desktops)
}

const viewports = {
  mobile: {
    width: '375px',
    height: '650px',
  },
  tablet: {
    width: '768px',
    height: '1024px',
  },
  smallLaptop: {
    width: '1024px',
    height: '768px',
  },
  laptop: {
    width: '1440px',
    height: '900px',
  },
  desktop: {
    width: '1920px',
    height: '1080px',
  },
}

const config = { breakpoints, colors, themes, viewports }

export default config
export { breakpoints, colors, themes, viewports }
