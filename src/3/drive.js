const { RepeatedMap } = require("./RepeatedMap");

function countTrees(map, pattern) {
  const rMap = new RepeatedMap(map);
  let x = 0;
  let y = 0;
  let atPosition;
  let trees = 0;

  do {
    atPosition = rMap.getPosition(x, y);

    if (atPosition === "#") trees++;

    x += pattern.right;
    y += pattern.down;
  } while (atPosition !== undefined);

  return trees;
}

module.exports = { countTrees };
