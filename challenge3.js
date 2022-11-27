const dolphinsAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 123) / 3;
console.log(dolphinsAverage, koalasAverage);
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log("Dolphins win the trophy!");
}
else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log("Koalas win the trophy!");
}
else if (koalasAverage === dolphinsAverage && koalasAverage >= 100) {
    console.log("It is a draw!");
}
else {
    console.log("Nobody lifts the trophy!");
}
