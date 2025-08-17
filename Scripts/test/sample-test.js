import { format } from "../Utils/currencyformatter.js"


console.log("Test Suite: formatCurrency");

console.log("Converts cents to dollars")
if (format(2005)==='20.05')
    console.log('passed');
else 
    console.log('failed')

console.log("Rounding off to nearest decimal")
if (format(207.5)==='2.08')
    console.log("passed");
else 
    console.log("failed");


if (format(0)==='0.00')
    console.log('passed')
else 
    console.log('failed');