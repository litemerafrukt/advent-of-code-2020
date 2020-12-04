const {
  splitPassports,
  buildPassport,
  hasRequiredFields,
} = require("./passport");

describe("passport", () => {
  const testPassports = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`;

  test("split into separate passports", () => {
    const expected = [
      `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm`,
      `iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929`,
      `hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm`,
      `hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`,
    ];

    expect(splitPassports(testPassports)).toEqual(expected);
  });

  test("build passport", () => {
    const expected = new Map([
      ["ecl", "gry"],
      ["pid", "860033327"],
      ["eyr", "2020"],
      ["hcl", "#fffffd"],
      ["byr", "1937"],
      ["iyr", "2017"],
      ["cid", "147"],
      ["hgt", "183cm"],
    ]);
    const aPassport = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm`;

    expect(buildPassport(aPassport)).toEqual(expected);
  });

  test("validate that passport has required fields", () => {
    const passport = new Map([
      ["ecl", "gry"],
      ["pid", "860033327"],
      ["eyr", "2020"],
      ["hcl", "#fffffd"],
      ["byr", "1937"],
      ["iyr", "2017"],
      ["cid", "147"],
      ["hgt", "183cm"],
    ]);
    const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

    expect(hasRequiredFields(required, passport)).toBe(true);
  });

  test("invalidate that passport has required fields", () => {
    const passport = new Map([
      ["ecl", "gry"],
      ["pid", "860033327"],
      ["eyr", "2020"],
      ["iyr", "2017"],
      ["cid", "147"],
      ["hgt", "183cm"],
    ]);
    const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

    expect(hasRequiredFields(required, passport)).toBe(false);
  });
});
