function levelCalculator(win, loss) {
    var rankResult = win - loss;

    var level;
    if (win < 10) {
        level = "Iron";
    } else if (win >= 11 && win <= 20) {
        level = "Bronze";
    } else if (win >= 21 && win <= 50) {
        level = "Silver";
    } else if (win >= 51 && win <= 80) {
        level = "Gold";
    } else if (win >= 81 && win <= 90) {
        level = "Diamond";
    } else if (win >= 91 && win <= 100) {
        level = "Legendary";
    } else {
        level = "Immortal";
    }

    return {
        rankResult: rankResult,
        level: level
    };
}

function rankingCalculator() {
    var matchesWon = parseInt(document.getElementById("wins").value);
    var lostMatches = parseInt(document.getElementById("loss").value);

    var result = levelCalculator(matchesWon, lostMatches);

    document.getElementById("result").innerHTML = "The Hero has a win balance of " + result.rankResult + " and is at the level " + result.level;
}
