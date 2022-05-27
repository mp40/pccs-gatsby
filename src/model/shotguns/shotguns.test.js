import {
  getRandomHitLocation,
  getRandomD100Location,
  getRandomD1000Location,
} from "./";

test("it returns a number within spread of initial location", () => {
  const location = 50;
  const spread = 11;

  for (let i = 0; i < 666; i++) {
    const result = getRandomHitLocation(location, spread);

    console.log("result > ", result);
    expect(result >= 39 && result <= 61).toBe(true);
  }
});

test("it does not return result less than 0 on d100", () => {
  const location = 5;
  const spread = 11;

  for (let i = 0; i < 1; i++) {
    const result = getRandomD100Location(location, spread);

    console.log("result > ", result);
    expect(result >= 0 && result <= 16).toBe(true);
  }
});

test("it does not return result greater than 99 on d100", () => {
  const location = 95;
  const spread = 11;

  for (let i = 0; i < 666; i++) {
    const result = getRandomD100Location(location, spread);

    console.log("result > ", result);
    expect(result >= 84 && result <= 99).toBe(true);
  }
});

test("it does not return result less than 0 on d1000", () => {
  const location = 5;
  const spread = 11;

  for (let i = 0; i < 666; i++) {
    const result = getRandomD1000Location(location, spread);

    console.log("result > ", result);
    expect(result >= 0 && result <= 16).toBe(true);
  }
});

test("it does not return result greater than 999 on d1000", () => {
  const location = 995;
  const spread = 11;

  for (let i = 0; i < 666; i++) {
    const result = getRandomD1000Location(location, spread);

    console.log("result > ", result);
    expect(result >= 984 && result <= 999).toBe(true);
  }
});
