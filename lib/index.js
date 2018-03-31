// Entry point for your plugin
// This should expose your plugin's modules
/* START IMPORTS */
import themeVariables from './themeVariables';
import themeConfig from './themeConfig';

/* END IMPORTS */

/* START EXPORTS */

export const metadata = {
  name: '@bpanel/bmenace-theme',
  author: 'DarrenM',
  description: '',
  version: require('../package.json').version
};

export const decorateTheme = themeCreator => () =>
  themeCreator(themeVariables, themeConfig);

/* END EXPORTS */

