import themeVariables from './themeVariables';
const {
  bgBlendMode,
  logoContainerBg,
  logoContainerBorderRadius,
  logoContainerMargin,
  logoContainerPadding,
  logoOpacity,
  logoSize
} = themeVariables;

/// ******
/// THEME CONFIG
/// ******
const app = {
  body: {
    backgroundBlendMode: bgBlendMode
  }
};

// MAIN APP COMPONENTS
const sidebar = {
  logoContainer: {
    background: logoContainerBg,
    borderRadius: logoContainerBorderRadius,
    opacity: logoOpacity,
    ...logoContainerPadding,
    ...logoContainerMargin
  },
  logoImg: {
    height: logoSize,
    width: logoSize
  }
};

export default {
  app,
  // App components
  sidebar
};
