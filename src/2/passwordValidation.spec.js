const { isValidPuzzleOne, isValidPuzzleTwo } = require("./passwordValidation");

describe("password validation puzzle one", () => {
  test("should be valid", () => {
    const input = "1-3 a: abcde";

    expect(isValidPuzzleOne(input)).toBe(true);
  });

  test("should be valid", () => {
    const input = "2-9 c: ccccccccc";

    expect(isValidPuzzleOne(input)).toBe(true);
  });

  test("should be invalid", () => {
    const input = "1-3 b: cdefg";

    expect(isValidPuzzleOne(input)).toBe(false);
  });
});

describe("password validation puzzle two", () => {
  test("should be valid", () => {
    const input = "1-3 a: abcde";

    expect(isValidPuzzleTwo(input)).toBe(true);
  });

  test("should be invalid", () => {
    const input = "2-9 c: ccccccccc";

    expect(isValidPuzzleTwo(input)).toBe(false);
  });

  test("should be invalid", () => {
    const input = "1-3 b: cdefg";

    expect(isValidPuzzleTwo(input)).toBe(false);
  });
});
