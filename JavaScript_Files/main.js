const Users = require("./Users");
let file_name1 = "Sub_Users1.json";
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

Users.readCSV();
Users.saveToFile(array_of_Users1, file_name1);
