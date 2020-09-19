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

function readPlain() {
  fs.readFile("../Input_Files/input.txt", function (err, data) {
    if (err) {
      throw err;
    }
    let lines = data.toString().split("\n");
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
    resolve("resolved");
  });
}
exports.saveToFile = function (arr, file_name) {
  return new Promise((resolve, reject) => {
    let obj = {};
    for (let item of arr) {
      obj[item.id] = item;
    }

    fs.writeFile("../JSON_Files/" + file_name, JSON.stringify(obj), function (
      err
    ) {
      if (err) {
        throw err;
      }

      resolve("go read");
    });
  }).then(() => {
    readJsonFile(file_name);
  });
};
function readJsonFile(file_name) {
  fs.readFile("../JSON_Files/" + file_name, function (err, data) {
    if (err) {
      throw err;
    }
    console.table(JSON.parse(data));
  });
}
