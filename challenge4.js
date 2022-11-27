let tip;
const bill = 430;
bill >= 50 && bill <= 300 ? tip = 0.15 * bill : tip = 0.2 * bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total payment made was ${bill + tip}`);
