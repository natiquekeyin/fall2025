// Miltiline template literal to wrap the CSV data

var csvData = `0134138,Alan Smith,333-580-2254,70 inches
0134139   ,    Christina    Lee    ,  123            2266347 ,        130 cm
0134140,       Doug         Thomas       , 532           1226157, 158cm
0134141,            John Doe,                519-123-4567         , 160 cm`;
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
function normalizeHeight(height) {
  if (height.endsWith("inches")) {
    return height;
  }
  let cm = parseFloat(height);
  let inches = cm * 0.39;
  return `${Math.round(inches)} inches`;
}
function rowToFields(row) {
  let fields = row.split(/\s*,\s*/);
  fields[1] = removeExtraSpace(fields[1]);
  fields[2] = extractAreaCode(fields[2]);
  fields[3] = normalizeHeight(fields[3]);
  return fields.join(",");
}
function processCSV(csv) {
  let rows = splitIntoRows(csv);

  let data = rows.map((row) => rowToFields(row));

  return data.join("\n");
}

console.log(csvData);
console.log("-------------------------");
let processed = processCSV(csvData);
console.log(processed);

// Please practice this question a lot, because QAP2 will be heavily depending othe the same type of questions.  I keep on hearing from students that we were not ready for such kind of questions..
// Class material did not cover a lot of what is given in QAP2.
