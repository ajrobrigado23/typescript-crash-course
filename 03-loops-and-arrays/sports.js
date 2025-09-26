var sports = ["Golf", "Cricket", "Tennis", "Swimming"];
// Simplified for loop
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempSports = sports_1[_i];
    if (tempSports == "Cricket") {
        console.log("".concat(tempSports, " << My Favorite!"));
    }
    else {
        console.log(tempSports);
    }
}
