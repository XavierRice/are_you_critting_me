import {
  calderonOccupations,
  adventuringCallings,
  calderonQuirks,
} from "../data/npcGeneratorData";

import {
  species,
  backgrounds,
} from "../data/open5eNpcData";

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function generateCalling() {
  const useAdventuringClass = Math.random() < 0.5;

  if (useAdventuringClass) {
    return {
      name: randomItem(adventuringCallings),
      type: "class",
    };
  }

  return {
    name: randomItem(calderonOccupations),
    type: "occupation",
  };
}

export function generateNpc() {
  const calling = generateCalling();

  return {
    species: randomItem(species),
    calling: calling.name,
    callingType: calling.type,
    background: randomItem(backgrounds),
    quirk: randomItem(calderonQuirks),
  };
}