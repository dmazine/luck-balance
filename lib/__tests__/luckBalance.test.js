const luckBalance = require("../index.js");

describe("luckBalance", () => {
  it("test case 1", () => {
    const k = 3;

    // prettier-ignore
    const contests = [
      [5, 1],
      [2, 1],
      [1, 1],
      [8, 1],
      [10, 0],
      [5, 0]
    ];

    expect(luckBalance(k, contests)).toBe(29);
  });

  it("test case 2", () => {
    const k = 5;

    // prettier-ignore
    const contests = [
      [13, 1],
      [10, 1],
      [9, 1],
      [8, 1],
      [13, 1],
      [12, 1],
      [18, 1],
      [13, 1]
    ];

    expect(luckBalance(k, contests)).toBe(42);
  });

  it("test case 3", () => {
    const k = 2;

    // prettier-ignore
    const contests = [
      [5, 1],
      [4, 0],
      [6, 1],
      [2, 1],
      [8, 0]
    ];

    expect(luckBalance(k, contests)).toBe(21);
  });
});
