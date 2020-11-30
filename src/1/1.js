const R = require("ramda");

function say() {
  return [] |> R.append("Advent") |> R.append("Code!") |> R.join(" of ");
}

module.exports = { say };
