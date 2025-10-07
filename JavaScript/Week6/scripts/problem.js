// Miltiline template literal to wrap the CSV data

var csvData = `0134138,Alan Smith,333-580-2254,70 inches
0134139   ,    Christina    Lee    ,  123            2266347 ,        130 cm
0134140,       Doug         Thomas       , 532           1226157, 158cm`;

/*
Required output after cleaning:
 
0134138,Alan Smith,333-580-2254,70 inches
0134139,Christina Lee,123-412-6347,51 inches
0134140,Doug Thomas,532-412-6347,62 inches

*/

/* 
STEPS TO SOLVE IT:
1. Split the raw CSV string into an array of rows (one row per employee).
Hint: The data might include Unix (\n) or Windows (\r\n) line endings.

2. For each row, split it into individual fields (ID, Name, Phone Number, Height).
Note: You must handle cases where there is extra or missing whitespace around fields.


3.Remove any unnecessary spaces around the Name field to make it consistent.

4.Using a regular expression, extract the Area Code from the Phone Number field. The phone numbers are stored in two formats:
o	"555-555-5555"
o	"5555555555"


5. o	If the Height is in centimeters (cm), convert it to inches.
Conversion: 1 cm = 0.393701 inches
o	Round the result to the nearest whole number and format it as: "xx inches"
o	If the height is already in inches, leave it as is.
if height is already in inches.. return it... and if not do the above stepsl..


6. Create a new record for each employee with the following fields, separated by commas:
o	ID
o	Name
o	Area Code
o	Height in Inches


7. Combine all the processed records into a new CSV string, with rows separated by \n.
*/

function splitIntoRows(s) {
  return s.split(/\r?\n/);
}

function removeExtraSpace(s) {
  return s.replace(/\s+/, " ");
}

function extractAreaCode(phone) {
  let matches = phone.match(/(\(?\d{3}\)?)?[\s-]*(\d{3})[\s-]*(\d{4})/);
  if (matches) {
    return `${matches[1]}-${matches[2]}-${matches[3]}`;
  }
  return phone;
}
function rowToFields(row) {
  let fields = row.split(/\s*,\s*/);
  //3.Remove any unnecessary spaces around the Name field to make it consistent.
  fields[1] = removeExtraSpace(fields[1]);

  /* 4.Using a regular expression, extract the Area Code from the Phone Number field. The phone numbers are stored in two formats:
o	"555-555-5555"
o	"5555555555"*/

  fields[2] = extractAreaCode(fields[2]);
  console.log(fields[2]);

  return fields;
}
function processCSV(csv) {
  // do all steps
  //   Step 1: Split the raw CSV string into an array of rows (one row per employee).
  let rows = splitIntoRows(csv);

  //2. For each row, split it into individual fields (ID, Name, Phone Number, Height).
  //Note: You must handle cases where there is extra or missing whitespace around fields.

  //   a. by using for loop
  //   let data = [];
  //   for (let i = 0; i < rows.length; i++) {
  //     let row = rows[i];
  //     let fields = rowToFields(row);
  //     data.push(fields);
  //     console.log(data);
  //   }
  //   return fields;

  //  b.  by using for of loop
  //   for (let row of rows) {
  //     let fields = rowToFields(row);
  //     data.push(fields);
  //   }

  // c. by using map funciton

  let data = rows.map((row) => rowToFields(row));
  //   console.log(data);
}

// console.log(csvData);
console.log("-------------------------");
let processed = processCSV(csvData);
// console.log(processed);
