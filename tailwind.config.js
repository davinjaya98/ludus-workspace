const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'apps/**/*.{js,ts,jsx,tsx,css}'),
    join(__dirname, 'packages/ui/**/*.{js,ts,jsx,tsx,css}'), // Scan the UI library,
  ],
  presets: [require("nativewind/preset")], // This is the bridge for Cross-Platform TailwindCSS
  theme: {
    extend: {},
  },
  plugins: [],
};