const fs = require("fs/promises");
const { _, it } = require("param.macro");
const {
  splitPassports,
  buildPassport,
  hasRequiredFields,
} = require("./passport");

async function main() {
  const rawPassports = await fs
    .readFile("./src/4/input.txt", "utf-8")
    .catch(console.error);
  const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

  splitPassports(rawPassports)
    .map(buildPassport)
    .reduce(
      (numberOfValidPassports, passport) =>
        numberOfValidPassports +
        Number(hasRequiredFields(requiredFields, passport)),
      0,
    ) |> console.log("Part 1, number of valid passports: ", _);
}

main();
