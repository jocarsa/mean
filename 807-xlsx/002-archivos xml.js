const fs = require('fs');
const xmlbuilder = require('xmlbuilder');

try {
  // Create an XML document
  const root = xmlbuilder.create('root');

  // Add elements and data to the XML
  const person = root.ele('person');
  person.ele('name', 'John Doe');
  person.ele('age', '30');

  // Write the XML to a file
  const xml = root.end({ pretty: true });
  fs.writeFileSync('example.xml', xml);

  // Read the XML file
  const xmlData = fs.readFileSync('example.xml', 'utf8');
  const parsedXml = xmlbuilder.create(xmlData);

  // Accessing the data from the XML
  const name = parsedXml.ele('person').ele('name').text();
  const age = parsedXml.ele('person').ele('age').text();

  console.log('Name:', name);
  console.log('Age:', age);
} catch (error) {
  console.error('Error reading XML:', error.message);
}