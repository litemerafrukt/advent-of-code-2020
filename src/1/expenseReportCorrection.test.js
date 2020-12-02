const {
  findEntries,
  findThreeEntries,
  expenseReportCorrection,
} = require("./expenseReportCorrection");

describe("first of advent", () => {
  test("find first two entries that add to a number", () => {
    const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];
    const sum = 22 + 99;
    const expected = [22, 99];

    expect(findEntries(sum, numbers)).toEqual(expected);
  });

  test("find three entries", () => {
    const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];
    const sum = 11 + 44 + 99;
    const expected = [11, 44, 99];

    expect(findThreeEntries(sum, numbers)).toEqual(expected);
  });

  test("expenseReportCorrection should be 2178", () => {
    const expenses = [11, 22, 33, 44, 55, 66, 77, 88, 99];
    const correction = 22 + 99;
    const expected = 22 * 99;
    const result = expenseReportCorrection(findEntries)(correction)(expenses);

    expect(result).toBe(expected);
  });

  test("expenseReportCorrection should be 47916", () => {
    const expenses = [11, 22, 33, 44, 55, 66, 77, 88, 99];
    const correction = 11 + 44 + 99;
    const expected = 11 * 44 * 99;
    const result = expenseReportCorrection(findThreeEntries)(correction)(
      expenses,
    );

    expect(result).toBe(expected);
  });

  test("example from AoC", () => {
    const expenses = [1721, 979, 366, 299, 675, 1456];
    const expected = 241861950;
    const result = expenseReportCorrection(findThreeEntries)(2020)(expenses);

    expect(result).toBe(expected);
  });
});
