const Users = require("./Users");
const fs = require("fs");
let file_name = "Sub_Users.json";
const array_of_Users1 = [
  {
    id: "1",
    first_name: "Heywood",
    last_name: "Wagerfield",
    email: "hwagerfield0@nationalgeographic.com",
    gender: "Male",
    ip_address: "61.130.172.123",
    color: "Yellow",
    parentId: "1",
  },
  {
    id: "2",
    first_name: "Elita",
    last_name: "Mees",
    email: "emees1@canalblog.com",
    gender: "Female",
    ip_address: "39.71.77.39",
    color: "Red",
    parentId: "2",
  },
];
const array_of_Users2 = [
  {
    id: "87",
    first_name: "Jarred",
    last_name: "Bramley",
    email: "jbramley2e@google.com.hk",
    gender: "Male",
    ip_address: "27.195.19.73",
    color: "Yellow",
    parentId: "87",
  },
  {
    id: "88",
    first_name: "Gwyneth",
    last_name: "Calafato",
    email: "gcalafato2f@seesaa.net",
    gender: "Female",
    ip_address: "45.158.107.140",
    color: "Teal",
    parentId: "88",
  },
];
Users.readCSV();
Users.readPlain();
fs.writeFile("../JSON_Files/" + file_name, "", function (err) {
  if (err) {
    throw err;
  }
});
Users.saveToFile(array_of_Users1, file_name);
Users.saveToFile(array_of_Users2, file_name);
Users.readJsonFile("All_Users.json");
