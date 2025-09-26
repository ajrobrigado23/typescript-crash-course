let sports: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];


// Simplified for loop

for (let tempSports of sports) {

    if (tempSports == "Cricket") {
        console.log(`${tempSports} << My Favorite!`)
    } else {
        console.log(tempSports);
    }

}