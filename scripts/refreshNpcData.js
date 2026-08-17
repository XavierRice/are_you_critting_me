import fs from "fs";

const speciesUrl =
  "https://api.open5e.com/v2/species/?document__key__in=srd-2024&fields=name,key";

const backgroundsUrl =
  "https://api.open5e.com/v2/backgrounds/?document__key__in=srd-2024&fields=name,key";

async function fetchResults(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Open5e request failed: ${response.status}`
    );
  }

  const data = await response.json();

  return data.results;
}

async function refreshNpcData() {
  try {
    console.log("Fetching NPC data from Open5e...");

    const speciesResults = await fetchResults(speciesUrl);
    const backgroundResults = await fetchResults(backgroundsUrl);

    const species = speciesResults.map(
      (item) => item.name
    );

    const backgrounds = backgroundResults.map(
      (item) => item.name
    );

    const fileContents = `// AUTO-GENERATED FROM OPEN5E
// Run npm run refresh-npc-data to update this file.

export const species = ${JSON.stringify(
      species,
      null,
      2
    )};

export const backgrounds = ${JSON.stringify(
      backgrounds,
      null,
      2
    )};
`;

    fs.writeFileSync(
      "./src/data/open5eNpcData.js",
      fileContents
    );

    console.log("Species found:", species);
    console.log("Backgrounds found:", backgrounds);

    console.log(
      "✅ src/data/open5eNpcData.js updated."
    );
  } catch (error) {
    console.error("Could not refresh NPC data:");
    console.error(error);
  }
}

refreshNpcData();