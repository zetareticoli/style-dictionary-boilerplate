const StyleDictionary = require('style-dictionary');
const config = require('./config.js');

console.log('🚀 Build dei design tokens in corso...\n');

const sd = StyleDictionary.extend(config);

sd.buildAllPlatforms();

console.log('\n✅ Build completata! I file sono disponibili nella cartella build/');

