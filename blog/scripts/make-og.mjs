import sharp from 'sharp';

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0d1117"/>
  <text x="100" y="330" font-family="Helvetica, Arial, sans-serif" font-size="96" font-weight="bold" fill="#e6edf3">Huang</text>
  <text x="100" y="420" font-family="Helvetica, Arial, sans-serif" font-size="40" fill="#8b949e">Projects &amp; notes — blog.clothpath.com</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('src/assets/og-default.png');
console.log('og-default.png written');
