module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            outputReferences: true
          }
        }
      ]
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'build/scss/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
          options: {
            outputReferences: true
          }
        },
        {
          destination: '_map.scss',
          format: 'scss/map-deep',
          options: {
            mapName: 'tokens'
          }
        }
      ]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'build/js/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/module-flat'
        },
        {
          destination: 'tokens.json',
          format: 'json/flat'
        }
      ]
    }
  }
};

