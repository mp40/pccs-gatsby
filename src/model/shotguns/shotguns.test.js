import { getRandomHitLocation } from "./";

test("it does not return result less than 0 on d100", () => {
  const location = 5;
  const spread = 11;

  for (let i = 0; i < 10; i++) {
    const result = getRandomHitLocation(location, spread, 99);

    expect(result >= 0 && result <= 16).toBe(true);
  }
});

test("it does not return result greater than 99 on d100", () => {
  const location = 95;
  const spread = 11;

  for (let i = 0; i < 10; i++) {
    const result = getRandomHitLocation(location, spread, 99);

    expect(result >= 84 && result <= 99).toBe(true);
  }
});

test("it does not return result less than 0 on d1000", () => {
  const location = 5;
  const spread = 11;

  for (let i = 0; i < 10; i++) {
    const result = getRandomHitLocation(location, spread, 999);

    expect(result >= 0 && result <= 16).toBe(true);
  }
});

test("it does not return result greater than 999 on d1000", () => {
  const location = 995;
  const spread = 11;

  for (let i = 0; i < 10; i++) {
    const result = getRandomHitLocation(location, spread, 999);

    expect(result >= 984 && result <= 999).toBe(true);
  }
});
