import { getRandomHitLocation } from "./";

test("it returns a number within spread of initial location", () => {
  const location = 50;
  const spread = 11;

  for (let i = 0; i < 666; i++) {
    const result = getRandomHitLocation(location, spread);

    console.log("result > ", result);
    expect(result >= 39 && result <= 61).toBe(true);
  }
});
