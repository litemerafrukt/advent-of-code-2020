const { it } = require("param.macro");

function buildValidator(rule) {
  const [interval, char] = rule.split(" ");
  const [lowerLimit, upperLimit] = interval.split("-");

  return password =>
    [...password].filter(it === char).length
    |> it >= lowerLimit && it <= upperLimit;
}

function isValidPuzzleOne(input) {
  const [rule, password] = input.split(":").map(it.trim());
  const validator = buildValidator(rule);

  return validator(password);
}

function buildAnotherValidator(rule) {
  const [positions, char] = rule.split(" ");
  const [firstPosition, secondPosition] = positions.split("-");

  return password =>
    (password[firstPosition - 1] === char ||
      password[secondPosition - 1] === char) &&
    !(
      password[firstPosition - 1] === char &&
      password[secondPosition - 1] === char
    );
}

function isValidPuzzleTwo(input) {
  const [rule, password] = input.split(":").map(it.trim());
  const validator = buildAnotherValidator(rule);

  return validator(password);
}

module.exports = { isValidPuzzleOne, isValidPuzzleTwo };
