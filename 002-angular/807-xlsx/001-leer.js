const XLSX = require('xlsx');

// Load the Excel file
const workbook = XLSX.readFile('datos.xlsx');

// Select the first sheet
var worksheet = workbook.Sheets[workbook.SheetNames[0]];

// Convert the sheet to JSON
const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

// Print the JSON data
console.log(jsonData);
console.log(jsonData[1][0])

// Create a new worksheet
var worksheet = XLSX.utils.aoa_to_sheet([
  ['Name', 'Age'],
  ['John Doe', 30],
  ['Jane Smith', 25]
]);

// Add the worksheet to the workbook
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// Write the workbook to a file
XLSX.writeFile(workbook, 'datos.xlsx');