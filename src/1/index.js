const fs = require("fs/promises");
const R = require("ramda");
const {
  expenseReportCorrection,
  findThreeEntries,
  findEntries,
} = require("./expenseReportCorrection");

async function main() {
  const input = await fs
    .readFile("./src/1/input.txt", "utf-8")
    .catch(console.error);

  input
    |> R.trim
    |> R.split("\n")
    |> R.map(Number)
    |> expenseReportCorrection(findEntries)(2020)
    |> R.partial(console.log, "First: ");

  input
    |> R.trim
    |> R.split("\n")
    |> R.map(Number)
    |> expenseReportCorrection(findThreeEntries)(2020)
    |> R.partial(console.log, "Second: ");
}

main();
