import { format } from "../Utils/currencyformatter.js"

if (format(207.5)==='2.08')
    console.log("passed");
else 
    console.log("failed");


if (format(0)==='0.00')
    console.log('passed')
else 
    console.log('failed');