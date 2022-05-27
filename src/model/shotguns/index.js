export const pelletSpreadTable = Object.freeze({
  "-12": 1,
  "-10": 2,
  "-6": 3,
  "-4": 4,
  "-2": 6,
  0: 8,
  2: 11,
  4: 14,
  6: 19,
  8: 25,
  10: 34,
  12: 45,
  14: 60,
  16: 79,
  18: 100,
});

export const getRandomHitLocation = (initialLocation, spread, upperLimit) => {
  const min = initialLocation - spread;
  const max = initialLocation + spread;

  let location = Math.floor(Math.random() * (max - min + 1)) + min;

  if (location < 0 || location > upperLimit) {
    location = getRandomHitLocation(initialLocation, spread, upperLimit);
  }

  return location;
};
