const { say } = require("./1");

describe("first", () => {
  test("should return Advent of Code!", () => {
    expect(say()).toBe("Advent of Code!");
  });
});
