const path = require('path');
const fs = require('fs');

const SRC_PATH = path.resolve(__dirname, './mapJson');
console.log(SRC_PATH)

const files = fs.readdirSync(SRC_PATH)
console.log(files)
files.forEach( file => {
  const filePath = path.join(SRC_PATH, file)
  const newFilePath = path.join(SRC_PATH, file.replace('json', 'js'))
  fs.renameSync(filePath, newFilePath);
})
