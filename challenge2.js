const johnWeight = 85;
const johnHeight = 1.76;
const markWeight = 95;
const markHeight = 1.88;
let johnBMI, markBMI;

johnBMI = johnWeight / (johnHeight ** 2);
markBMI = markWeight / (markHeight ** 2);
console.log(markBMI, johnBMI);
let markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
}
else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}
