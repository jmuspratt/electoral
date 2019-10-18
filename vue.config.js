const path = require('path');
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      patterns: [
        '/Users/james/Sites/electoral/src/assets/styles/globals/_vars.scss',
        '/Users/james/Sites/electoral/src/assets/styles/globals/_mixins.scss',
        '/Users/james/Sites/electoral/src/assets/styles/app.scss',
      ],
      preProcessor: 'scss',
    },
  },
};
