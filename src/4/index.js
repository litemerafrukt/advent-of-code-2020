const fs = require("fs/promises");
const { _ } = require("param.macro");
const {
  splitPassports,
  buildPassport,
  hasRequiredFields,
  fieldValidators,
} = require("./passport");

async function main() {
  const rawPassports = await fs
    .readFile("./src/4/input.txt", "utf-8")
    .catch(console.error);
  const passports = splitPassports(rawPassports).map(buildPassport);

  const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
  const hasFields = hasRequiredFields(requiredFields, _);

  passports.reduce(
    (numberOfValidPassports, passport) =>
      numberOfValidPassports + Number(hasFields(passport)),
    0,
  ) |> console.log("Part 1, number of valid passports: ", _);

  passports.reduce(
    (numberOfValidPassports, passport) =>
      numberOfValidPassports +
      Number(hasFields(passport) && fieldValidators(passport)),
    0,
  ) |> console.log("Part 2, number of valid passports: ", _);
}

main();
