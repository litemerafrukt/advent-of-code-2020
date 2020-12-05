const Upper = "Upper";
const Lower = "Lower";

class BSP {
  constructor(lowRow, maxRow) {
    this.min = lowRow;
    this.max = maxRow;
  }

  get hasLeaf() {
    return this.min === this.max;
  }

  get leaf() {
    return this.hasLeaf ? this.min : null;
  }

  divide(half) {
    if (half === Upper) {
      const size = this.max - this.min;
      return new BSP(this.min + Math.round(size / 2), this.max);
    }

    if (half === Lower) {
      const size = this.max - this.min;
      return new BSP(this.min, this.max - Math.round(size / 2));
    }

    return this;
  }
}

function findRow(maxRow, path) {
  let bsp = new BSP(0, maxRow);

  for (const d of path) {
    if (d === "B") {
      bsp = bsp.divide(Upper);
    }
    if (d === "F") {
      bsp = bsp.divide(Lower);
    }
  }

  return bsp.leaf;
}

function findColumn(maxColumn, path) {
  let bsp = new BSP(0, maxColumn);

  for (const d of path) {
    if (d === "R") {
      bsp = bsp.divide(Upper);
    }
    if (d === "L") {
      bsp = bsp.divide(Lower);
    }
  }

  return bsp.leaf;
}

function findSeatId(rows, columns, path) {
  return findRow(rows, path) * 8 + findColumn(columns, path);
}

module.exports = { findSeatId };

if (process.env.NODE_ENV === "test") {
  describe("find rows", () => {
    test("should find row 44 in a 128 row plane", () => {
      expect(findRow(127, "FBFBBFF")).toBe(44);
    });
  });

  describe("find columns", () => {
    test("should find column 5 in a 8 column plane", () => {
      expect(findColumn(7, "RLR")).toBe(5);
    });
  });

  describe("find seat id", () => {
    test("should find id 357 in a 128 x 8 plane", () => {
      expect(findSeatId(127, 7, "FBFBBFFRLR")).toBe(357);
    });

    test("BFFFBBFRRR: row 70, column 7, seat ID 567", () => {
      expect(findSeatId(127, 7, "BFFFBBFRRR")).toBe(567);
    });

    test("FFFBBBFRRR: row 14, column 7, seat ID 119", () => {
      expect(findSeatId(127, 7, "FFFBBBFRRR")).toBe(119);
    });

    test("BBFFBBFRLL: row 102, column 4, seat ID 820", () => {
      expect(findSeatId(127, 7, "BBFFBBFRLL")).toBe(820);
    });
  });
}
