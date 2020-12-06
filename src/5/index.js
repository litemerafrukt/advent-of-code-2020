const fs = require("fs/promises");
const R = require("ramda");
const { _ } = require("param.macro");
const { findSeatId } = require("./boardingPass");

async function main() {
  const input = await fs
    .readFile("./src/5/input.txt", "utf-8")
    .catch(console.error);

  const ids = input.trim().split("\n").map(findSeatId(127, 7, _));

  Math.max(...ids) |> console.log("Part one: highest id: ", _);

  ids.sort((a, b) => a - b);
  const myId = do {
    let result;

    for (const [n1, n2] of R.zip(ids, ids.slice(1))) {
      if (n1 + 1 !== n2) {
        result = n1 + 1;
        break;
      }
    }
    result;
  };

  console.log("Part 2: seat id: ", myId);
}

main();
