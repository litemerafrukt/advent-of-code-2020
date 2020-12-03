const { countTrees } = require("./drive");

describe("countTrees", () => {
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

  test("should count encountered trees according to drive pattern", () => {
    const result = countTrees(testMap, { right: 3, down: 1 });

    expect(result).toBe(7);
  });
});
