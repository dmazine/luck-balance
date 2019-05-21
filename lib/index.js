"use strict";

function luckBalance(k, contests) {
  contests.sort((x, y) => {
    return y[1] === x[1] ? y[0] - x[0] : y[1] - x[1];
  });

  let maximumLuckAmount = 0;
  let importantCompetitionsLost = 0;

  contests.forEach(contest => {
    if (contest[1] === 0) {
      // Lose unimportant contests
      maximumLuckAmount += contest[0];
    } else if (importantCompetitionsLost < k) {
      // Lose important contests
      maximumLuckAmount += contest[0];
      importantCompetitionsLost++;
    } else {
      // Win remaining contests
      maximumLuckAmount -= contest[0];
    }
  });

  return maximumLuckAmount;
}

module.exports = luckBalance;
