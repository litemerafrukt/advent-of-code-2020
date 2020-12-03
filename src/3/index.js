const fs = require("fs/promises");
const { _, it } = require("param.macro");
const { countTrees } = require("./drive");

async function main() {
  const rawMap = await fs
    .readFile("./src/3/input.txt", "utf-8")
    .catch(console.error);

  countTrees(rawMap, { right: 3, down: 1 })
    |> console.log("Part one, number of trees: ", _);

  [
    { right: 1, down: 1 },
    { right: 3, down: 1 },
    { right: 5, down: 1 },
    { right: 7, down: 1 },
    { right: 1, down: 2 },
  ].reduce((trees, pattern) => {
    trees.push(countTrees(rawMap, pattern));
    return trees;
  }, [])
    |> it.reduce((product, trees) => trees * product, 1)
    |> console.log("Part two, number of trees: ", _);
}

main();
