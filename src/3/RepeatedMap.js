const { _ } = require("param.macro");

class RepeatedMap {
  constructor(mapSlice) {
    this.map = mapSlice.trim().split("\n").map(Array.from(_));
  }

  get width() {
    return this.map[0].length;
  }

  getPosition(x, y) {
    const pX = do {
      let _x = x;
      while (_x >= this.width) _x = _x - this.width;
      _x;
    };

    return this.map?.[y]?.[pX];
  }
}

module.exports = { RepeatedMap };
