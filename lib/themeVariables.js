import tinygradient from 'tinygradient';
import { utils } from '@bpanel/bpanel-ui';

const { makeRem, makeGutter } = utils;

const logo = 'https://i.imgur.com/Ofo4KxI.png';

// Font Size
const fontSizeBase = 1; // This gets transformed to rem

/// ***********
/// BACKGROUNDS
/// ***********

const appBg =
  'linear-gradient( rgba(1, 153, 180, 1), rgba(44, 0, 150, 0.4) ), url(htt' +
  'ps://i.imgur.com/Uc7N6C5.png)' +
  'no-repeat center center fixed';
const appBgSize = 'cover';
const bgBlendMode = 'multiply';

/// NEW SIDEBAR ITEM

/// ******
/// COLORS
/// ******

// Primary Palette
const themeColors = {
  // Themeable colors
  primary: '#fff', // white
  highlight1: '#91fbeb', // teal
  highlight2: '#ccd9ce', // light blue
  lowlight1: '#7c5daa', // saturated purple
  lowlight2: '#0199b5', // saturated teal
  lightBg: 'rgba(255, 255, 255, 0.1)', // transparent white
  mediumBg: 'rgba(246, 237, 211, .2)', // transparent teal
  darkBg: 'rgba(0, 0, 0, .4)', // transparent black
  footerBg: 'rgba(255, 255, 255, 0.2)',
  get highlightGradient() {
    return tinygradient([this.highlight1, this.highlight2]).css();
  },
  get lowlightGradient() {
    return tinygradient([this.lowlight1, this.lowlight2]).css();
  },
  // Constants
  white: '#fff',
  black: '#000',
  transparent: 'transparent'
};

// Logo
const logoContainerBg = 'rgba(255, 255, 255, 0.0)';
const logoContainerBorderRadius = '0%';
const logoContainerMargin = makeGutter('margin', { vertical: 1.875 });
const logoContainerPadding = makeGutter('padding', { all: 1.25 });

const logoOpacity = 1;
const logoSize = makeRem(8.25, fontSizeBase);
const logoUrl = logo;

const themeVariables = {
  /// ***********
  /// BACKGROUNDS
  /// ***********
  appBg,
  appBgSize,
  bgBlendMode,
  /// ******
  /// COLORS
  /// ******
  themeColors,
  // Logo
  logoContainerBg,
  logoContainerBorderRadius,
  logoContainerMargin,
  logoContainerPadding,
  logoOpacity,
  logoSize,
  logoUrl
};

export default themeVariables;
