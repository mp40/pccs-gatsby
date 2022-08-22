import { getHpi, getRangeIndex, getMovementMod } from "./data";

test("combined movement of 0 returns 0", () => {
  const result = getHpi(0);

  expect(result).toBe(0);
});

test("combined movement of more than 0 and less than 0.5 returns 0.5", () => {
  const result = getHpi(0.4);

  expect(result).toBe(0.5);
});

test("combined movement of 0.5 returns 0.5", () => {
  const result = getHpi(0.5);

  expect(result).toBe(0.5);
});

test("combined movement of more than 0.5 and less than 1 returns 1", () => {
  const result = getHpi(0.6);

  expect(result).toBe(1);
});

test("returns range of 0 for range less than 10", () => {
  expect(getRangeIndex(1)).toBe(0);
  expect(getRangeIndex(9)).toBe(0);
});

test("returns range of 0 for range of 10", () => {
  expect(getRangeIndex(10)).toBe(0);
});

test("shooter 0.25, target 0.25 at range 50", () => {
  const shooter = 0.25;
  const target = 0.25;
  const range = 50;

  const result = getMovementMod(shooter, target, range);

  expect(result).toBe(-5);
});

test("shooter 0, target 0.25 at range 50", () => {
  const shooter = 0;
  const target = 0.25;
  const range = 50;

  const result = getMovementMod(shooter, target, range);

  expect(result).toBe(-5);
});
