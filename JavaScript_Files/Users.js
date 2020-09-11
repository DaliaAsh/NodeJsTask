const fs = require("fs");
exports.readCSV = function () {
  fs.readFile("../Input_Files/input.csv", function (err, data) {
    if (err) {
      throw err;
    }
    fs.writeFile("../Input_Files/input.txt", data.toString(), function (err) {
      if (err) {
        throw err;
      }
    });
  });
};

exports.readPlain = function () {
  fs.readFile("../Input_Files/input.txt", function (err, data) {
    if (err) {
      throw err;
    }
    let lines = data.toString().split("\n");
    let numOfLines = lines.length;
    let key_line = lines[0];
    let keys = key_line.split(",");
    let Array_Of_Objects = [];
    let line = [];
    let ParentObj = {};
    for (let i = 1; i < lines.length; i++) {
      let obj = {};
      line = lines[i].split(",");
      for (let j = 0; j < line.length; j++) {
        obj[keys[j]] = line[j];
      }
      Array_Of_Objects.push(obj);
    }

    for (let k = 0; k < Array_Of_Objects.length - 1; k++) {
      ParentObj[k + 1] = Array_Of_Objects[k];
    }

    fs.writeFile(
      "../JSON_Files/All_Users.json",
      JSON.stringify(ParentObj),
      function (err) {
        if (err) {
          throw err;
        }
      }
    );
  });
};
exports.saveToFile = function (arr, file_name) {};
exports.readJsonFile = function (file_name) {
  fs.readFile("../JSON_Files/" + file_name, function (err, data) {
    if (data.length !== 0) {
      console.log(JSON.parse(data));
    }
  });
};
