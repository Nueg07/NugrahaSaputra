var fs = require ("fs");
const fileInput = './soal2/logging.txt';

fs.readFile(fileInput, 'utf-8', (err, data) => {
          if (err) throw err;
          console.log(data);
});