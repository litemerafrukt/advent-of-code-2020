const { RepeatedMap } = require("./RepeatedMap");

describe("RepeatedMap", () => {
  const testMap = `
..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;

  test("should get symbol at position", () => {
    const m = new RepeatedMap(testMap);

    expect(m.getPosition(0, 1)).toBe("#");
  });

  test("should repeat the map on x-axis", () => {
    const m = new RepeatedMap(testMap);

    expect(m.getPosition(11, 1)).toBe("#");
  });
});
