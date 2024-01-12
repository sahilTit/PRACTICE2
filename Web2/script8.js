let students = [
  "shubh",
  "anjali",
  "Shivani",
  "Shivangi",
  "Annapurna",
  "Shubham",
  "Krishnanendu",
  "Ravindranathan",
  "Shivesh",
  "kaif",
  "Emanuel",
];
let houses = [];

for (const student of students) {
  if (student.length < 6) {
    houses.push("Gryffindor");
  } else if (student.length < 8) {
    houses.push("Hufflepuff");
  } else if (student.length < 12) {
    houses.push("Ravenclaw");
  } else {
    houses.push("slytherin");
  }
}

console.log(houses)
