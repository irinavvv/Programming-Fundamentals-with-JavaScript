function printAndSum(start, end) {
  let sum = 0;
  let printLine = "";
  for (let currentNum = start; currentNum <= end; currentNum++) {
    sum += currentNum;
    if (currentNum === end) {
        printLine += `${currentNum}`;
    } else {
    printLine += `${currentNum} `;
    //console.log(printLine);
  }
}
  console.log(printLine);
  console.log(`Sum: ${sum}`);
}
printAndSum(50, 60);
