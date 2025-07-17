const path = require("node:path");

console.log(__filename);

console.log(__dirname);

console.log(path.basename(__filename));

console.log(path.basename(__dirname));

console.log(path.extname(__filename));

console.log(path.parse(__filename));

console.log(path.join("folder1", "folder2"));

console.log(path.join(__dirname, "../local-modules/data.json"));
