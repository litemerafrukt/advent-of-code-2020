const fs = require("fs/promises");
const { _, it } = require("param.macro");
const { isValidPuzzleOne, isValidPuzzleTwo } = require("./passwordValidation");

async function main() {
  const input = await fs
    .readFile("./src/2/input.txt", "utf-8")
    .catch(console.error);

  const rulesAndPasswords = input.trim().split("\n");

  rulesAndPasswords.map(isValidPuzzleOne(_)).filter(it).length
    |> console.log("Rule one, number of valid passwords: ", _);

  rulesAndPasswords.map(isValidPuzzleTwo(_)).filter(it).length
    |> console.log("Rule two, number of valid passwords: ", _);
}

main();
