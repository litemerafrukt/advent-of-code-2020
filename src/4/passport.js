const { it, _ } = require("param.macro");

function splitPassports(input) {
  return input.split("\n\n");
}

function buildPassport(rawPassport) {
  return rawPassport.split(/\s/).map(it.split(":")) |> new Map(_);
}

function hasRequiredFields(fields, passport) {
  return fields.map(passport.has(_)).every(it === true);
}

module.exports = { splitPassports, buildPassport, hasRequiredFields };
