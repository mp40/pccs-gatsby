import { d0, d1, d2, d3, d4, d5 } from "./tables";

const mapDefenseLevelToTable = {
  0: d0,
  1: d1,
  2: d2,
  3: d3,
  4: d4,
  5: d5,
};

const mapParryToIndex = {
  9: 0,
  8: 1,
  7: 2,
  6: 3,
  5: 4,
  4: 5,
  3: 6,
  2: 7,
  1: 8,
};

export const getPercentageToHit = (attackLevel, defenseLevel, parryValue) => {
  const table = mapDefenseLevelToTable[defenseLevel];
  const parryIndex = mapParryToIndex[parryValue];

  return table[attackLevel][parryIndex];
};
