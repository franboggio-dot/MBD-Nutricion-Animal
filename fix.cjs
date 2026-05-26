const fs = require('fs');
let code = fs.readFileSync('src/pages/PresetD.jsx', 'utf8');

const heroCardsStart = '// ── HERO FEATURE CARDS';
const sobreMiStart = '// ── SOBRE MÍ';
const startIndex = code.indexOf(heroCardsStart);
const endIndex = code.indexOf(sobreMiStart);
if (startIndex !== -1 && endIndex !== -1) {
  code = code.substring(0, startIndex) + code.substring(endIndex);
}

// 2. Remove <HeroFeatureCards /> invocation
code = code.replace('<HeroFeatureCards />', '');
code = code.replace('<HeroFeatureCards />', '');

// 3. Move 'Sobre Mi' section up
code = code.replace(
  "padding: '8rem 2rem',\\n      background: 'linear-gradient",
  "padding: '8rem 2rem',\\n      marginTop: '-6rem',\\n      background: 'linear-gradient"
);
code = code.replace(
  "padding: '8rem 2rem',\n      background: 'linear-gradient",
  "padding: '8rem 2rem',\n      marginTop: '-6rem',\n      background: 'linear-gradient"
);
code = code.replace(
  "padding: '8rem 2rem',\r\n      background: 'linear-gradient",
  "padding: '8rem 2rem',\r\n      marginTop: '-6rem',\r\n      background: 'linear-gradient"
);

fs.writeFileSync('src/pages/PresetD.jsx', code);
console.log('Done!');
