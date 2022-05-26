import { getPercentageToHit } from "./";

test("finding chance to hit defense 1, parry 9 vs attack level 0", () => {
  const attackLevel = 0;
  const denfenseLevel = 1;
  const parryValue = 9;

  const result = getPercentageToHit(attackLevel, denfenseLevel, parryValue);

  expect(result).toBe(37);
});

test("finding chance to hit: defense 1, parry 5 vs attack level 0", () => {
  const attackLevel = 0;
  const denfenseLevel = 1;
  const parryValue = 5;

  const result = getPercentageToHit(attackLevel, denfenseLevel, parryValue);

  expect(result).toBe(56);
});

test("finding chance to hit: defense 1, parry 1 vs attack level 0", () => {
  const attackLevel = 0;
  const denfenseLevel = 1;
  const parryValue = 1;

  const result = getPercentageToHit(attackLevel, denfenseLevel, parryValue);

  expect(result).toBe(84);
});
