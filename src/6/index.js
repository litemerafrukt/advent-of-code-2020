const fs = require("fs/promises");
const R = require("ramda");
const { _, it } = require("param.macro");

if (process.env.NODE_ENV !== "test") main();

async function main() {
  const input = await fs
    .readFile("./src/6/input.txt", "utf-8")
    .catch(console.error);

  splitGroups(input)
    |> countAnyoneAnswers
    |> console.log("Part 1: sum of counts ", _);

  splitGroups(input)
    |> countEverybodyAnswers
    |> console.log("Part 2: sum of counts ", _);
}

function splitGroups(input) {
  return input.split("\n\n");
}

function countAnyoneAnswers(groups) {
  return (
    groups
    |> R.map(it.replace(/\s/g, ""))
    |> R.map(g => new Set(g))
    |> R.reduce((sum, answerSet) => sum + answerSet.size, 0)
  );
}

function countEverybodyAnswer(group) {
  const groupSize = group.length;

  return (
    group
    |> R.map(R.splitEvery(1))
    |> R.flatten
    |> R.sortBy(R.identity)
    |> R.groupWith(R.equals)
    |> R.filter(groupedAnswers => groupedAnswers.length === groupSize)
    |> R.length
  );
}

function countEverybodyAnswers(groups) {
  return (
    groups
    |> R.map(R.split("\n"))
    |> R.map(countEverybodyAnswer)
    |> R.reduce(R.add, 0)
  );
}

if (process.env.NODE_ENV === "test") {
  describe("find rows", () => {
    const testInput = `abc

a
b
c

ab
ac

a
a
a
a

b`;
    test("count questions to which anyone answered yes", () => {
      expect(countAnyoneAnswers(splitGroups(testInput))).toBe(11);
    });

    test("count questions to which everyone answered yes", () => {
      expect(countEverybodyAnswers(splitGroups(testInput))).toBe(6);
    });
  });
}
