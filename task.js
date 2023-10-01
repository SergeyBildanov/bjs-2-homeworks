"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  if (d === 0){
    arr.push(-b/(2*a))
  }
  if (d > 0){
    arr.push((-b + Math.sqrt(d) )/(2*a))
    arr.push((-b - Math.sqrt(d) )/(2*a))
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = (percent/100)/12;
  let s = amount - contribution;
  let summary;

  if (s === 0){
    summary = 0;
  }

  let payment = s * (p + (p / (((1 + p) ** countMonths) - 1)));
  summary = (countMonths * payment).toFixed(2);
  return Number(summary);
}