const R = require("ramda");

const findEntries = (sum, numbers) => {
  const ns = new Map(numbers.map((n, i) => [n, i]));

  for (let i = 0; i < numbers.length; i++) {
    const wanted = sum - numbers[i];

    if (ns.has(wanted) && ns.get(wanted) !== i) return [numbers[i], wanted];
  }

  return [];
};

const expenseReportCorrection = byFunc => correction => expenses =>
  byFunc(correction, expenses) |> R.reduce(R.multiply, 1);

const findThreeEntries = (sum, ns) => {
  const numbers = [...new Set(ns)];
  for (let i = 0; i < numbers.length; i++) {
    const wanted = sum - numbers[i];
    const got = findEntries(wanted, numbers.slice(i + 1));

    if (got.length === 2) return [numbers[i], ...got];
  }

  return [];
};

module.exports = { findEntries, expenseReportCorrection, findThreeEntries };
