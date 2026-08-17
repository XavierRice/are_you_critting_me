import {
  statBonuses,
  artifactPowers,
  artifactPowersByCategory,
  curses,
  cursesByCategory,
  titleOwners,
  titleConcepts,
  titlePlaces,
  artifactNounsByCategory,
  artifactNounsByItem,
} from "../data/itemGeneratorData";

import {
  equipment,
  spells,
} from "../data/open5eItemData";

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function normalizeItemName(name) {
  return name
    .replace(/\s*\([^)]*\)\s*$/, "")
    .trim();
}

function generateArtifactPower(baseItem) {
  const categoryPowers =
    artifactPowersByCategory[baseItem.category];

  if (
    categoryPowers &&
    categoryPowers.length > 0
  ) {
    return randomItem(categoryPowers);
  }

  return randomItem(artifactPowers);
}

function generateCurse(baseItem) {
  const categoryCurses =
    cursesByCategory[baseItem.category];

  if (
    categoryCurses &&
    categoryCurses.length > 0
  ) {
    return randomItem(categoryCurses);
  }

  return randomItem(curses);
}

function generateTitle(baseItem) {

const normalizedName =
  normalizeItemName(baseItem.name);

const itemSpecificNouns =
  artifactNounsByItem[normalizedName];

const categoryNouns =
  artifactNounsByCategory[baseItem.category] ||
  artifactNounsByCategory.unknown;

const nouns =
  itemSpecificNouns || categoryNouns;

const artifactNoun = randomItem(nouns);

  const templates = [
    () =>
      `The ${randomItem(titleOwners)}'s ${randomItem(
        titleConcepts
      )}`,

    () =>
      `The ${artifactNoun} of ${randomItem(
        titlePlaces
      )}`,

    () =>
      `The Last ${artifactNoun} of ${randomItem(
        titlePlaces
      )}`,

    () =>
      `The ${randomItem(titleConcepts)} of the ${randomItem(
        titleOwners
      )}`,

    () =>
      `The ${randomItem(titleOwners)}'s ${artifactNoun}`,

    () =>
      `${randomItem(titleOwners)}'s ${artifactNoun}`,
  ];

  return randomItem(templates)();
}

function generateBonusOrAbility() {
  const useSpell = Math.random() < 0.5;

  if (useSpell) {
    return {
      value: randomItem(spells),
      type: "ability",
    };
  }

  return {
    value: randomItem(statBonuses),
    type: "bonus",
  };
}

export function generateItem() {
  const baseItem = randomItem(equipment);
  const bonus = generateBonusOrAbility();

  return {
    title: generateTitle(baseItem),

    baseItem: baseItem.name,
    baseItemCategory: baseItem.category,

    bonusOrAbility: bonus.value,
    bonusType: bonus.type,

    artifactPower: generateArtifactPower(baseItem),
    curse: generateCurse(baseItem),
  };
}