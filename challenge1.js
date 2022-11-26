const johnWeight = 85;
const johnHeight = 1.76;
const markWeight = 95;
const markHeight = 1.88;
let johnBMI, markBMI;

johnBMI = johnWeight / (johnHeight ** 2);
markBMI = markWeight / (markHeight ** 2);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
