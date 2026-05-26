const fs = require("fs");
const f = "src/pages/PresetD.jsx";
let c = fs.readFileSync(f, "utf-8");

c = c.replace("Leaf, Droplets, Flower2, Check", "Leaf, Droplets, Flower2, Check,
  Sparkles, FlaskConical, ArrowRight");

console.log("test");
fs.writeFileSync(f, c);