const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "../src/app/data");
const outputFile = path.join(dataDir, "allfunkos.json");

const categories = [
  "marvelpop.json",
  "disneypop.json",
  "dcpop.json",
  "star-warspop.json",
  "animepop.json",
  "wwepop.json",
  "pokemonpop.json",
  "xmenpop.json",
  "fivenightspop.json",
  "doctor-whopop.json",
  "star-trekpop.json",
  "footballpop.json",
  "stranger-thingspop.json",
  "sonicpop.json",
  "harry-potterpop.json",
  "btspop.json",

];

let allFunkos = [];

categories.forEach((file) => {
  const filePath = path.join(dataDir, file);
  if (fs.existsSync(filePath)) {
    const content = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const category = file.replace("pop.json", "");
    const enriched = content.map((funko) => ({
      ...funko,
      category,
    }));
    allFunkos.push(...enriched);
  } else {
    console.warn(`⚠️  Skipping missing file: ${file}`);
  }
});

fs.writeFileSync(outputFile, JSON.stringify(allFunkos, null, 2));
console.log(`✅ Merged ${allFunkos.length} Funkos into allfunkos.json`);

