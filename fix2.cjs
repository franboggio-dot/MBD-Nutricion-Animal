const fs = require('fs');
let code = fs.readFileSync('src/pages/PresetD.jsx', 'utf8');

const therapiesStart = '// ── THERAPIES OVERVIEW ────────────────────────────────────────────────────────';
const sobreMiStart = '// ── SOBRE MÍ ────────────────────────────────────────────────────────────────';

const startIndex = code.indexOf(therapiesStart);
const endIndex = code.indexOf(sobreMiStart);

if (startIndex !== -1 && endIndex !== -1) {
  code = code.substring(0, startIndex) + code.substring(endIndex);
}

// Remove the rendering
code = code.replace('<TherapiesOverview />\\n', '');
code = code.replace('<TherapiesOverview />\\r\\n', '');
code = code.replace(/\\s*<TherapiesOverview \\/>/g, '');

// Restore the negative margin to SobreMi
code = code.replace(
  "padding: '8rem 2rem',\\n      background: 'linear-gradient",
  "padding: '8rem 2rem',\\n      marginTop: '-6rem',\\n      background: 'linear-gradient"
);
code = code.replace(
  "padding: '8rem 2rem',\\r\\n      background: 'linear-gradient",
  "padding: '8rem 2rem',\\r\\n      marginTop: '-6rem',\\r\\n      background: 'linear-gradient"
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
