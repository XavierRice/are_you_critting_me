import fs from "fs";

const equipmentUrl =
   "https://api.open5e.com/v2/items/?document__key__in=srd-2024&fields=name,key,category";
  

const spellsUrl =
  "https://api.open5e.com/v2/spells/?document__key__in=srd-2024&fields=name,key,level";

async function fetchAllResults(url) {
  let nextUrl = url;
  const allResults = [];

  while (nextUrl) {
    //Keep requesting pages until Open5e says there is no next page.

    const response = await fetch(nextUrl);

    if (!response.ok) {
      throw new Error(
       `Open5e request failed: ${response.status} — ${nextUrl}`
      );
    }

    const data = await response.json();

    allResults.push(...data.results);

    nextUrl = data.next;
  }

  return allResults;
}

async function refreshItemData() {
  try {
    console.log("Fetching item data from Open5e...");

    const equipmentResults =
      await fetchAllResults(equipmentUrl);
     

    const spellResults =
      await fetchAllResults(spellsUrl);

  const allowedItemCategories = new Set([
  "weapon",
  "tools",
  "armor",
  "wondrous-item",
]);

const allowedAdventuringGear = new Set([
  "Bell",
  "Book",
  "Bucket",
  "Candle",
  "Chain",
  "Crowbar",
  "Component Pouch",
  "Disguise Kit",
  "Climber's Kit",
  "Caltrops",
  "Ball Bearings",
]);

const filteredEquipmentResults = equipmentResults.filter((item) => {
  const category = item.category?.key;

  if (allowedItemCategories.has(category)) {
    return true;
  }

  if (
    category === "adventuring-gear" &&
    allowedAdventuringGear.has(item.name)
  ) {
    return true;
  }

  return false;
});

const equipment = filteredEquipmentResults.map(
  (item) => ({
    name: item.name,
    category: item.category?.key || "unknown",
  })
);


const filteredSpellResults = spellResults.filter(
  (spell) => spell.level <= 5
);

const spells = filteredSpellResults.map(
  (spell) => spell.name
);

    console.log(
      `Equipment found: ${equipment.length}`
    );

    console.log(
      `Spells found: ${spells.length}`
    );

    const fileContents = `// AUTO-GENERATED FROM OPEN5E
// Run npm run refresh-item-data to update this file.

export const equipment = ${JSON.stringify(
      equipment,
      null,
      2
    )};

export const spells = ${JSON.stringify(
      spells,
      null,
      2
    )};
`;

    fs.writeFileSync(
      "./src/data/open5eItemData.js",
      fileContents
    );

    console.log(
      "✅ src/data/open5eItemData.js updated."
    );
  } catch (error) {
    console.error(
      "Could not refresh item data:"
    );

    console.error(error);
  }
}

refreshItemData();