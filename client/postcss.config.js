//postcss.config.js
const tailwindcss = require('tailwindcss');
require('@tailwindcss/custom-forms'),
module.exports = {
    plugins: [
        require('postcss-import'),
        tailwindcss('./tailwind.js'),
        require('autoprefixer'),
    ],
};