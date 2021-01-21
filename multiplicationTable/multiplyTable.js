const table = [];
const x = 12;
const n = 6;

function multiplicationTable(n, x) {
  let appearances = 0; // counter for the timex X appear

  for (let i = 0; i < n; i++) {
    // creating table witn n empty rows
    table[i] = [];
    for (let j = 0; j < n; j++) {
      // in each row we create n columns.
      // each iteretion fill the row with values
      let result = (i + 1) * (j + 1); // the value to add (basically multiplication of the row num and the column num)

      // checking if the value eque to X
      // add it to the array if so
      if (result === x) {
        appearances++;
      }
      table[i].push(result);
    }
  }
  return appearances;
}

console.log(multiplicationTable(n, x));
console.log(table)