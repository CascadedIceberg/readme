let whatToDoForLunch = function (hungry, availableTime) {
  if (hungry === false) {
    console.log("I'm not hungry.");

  } else {
    if (availableTime === 20) {
      console.log("Make a sandwich.");
    } else if (availableTime >= 50) {
      console.log("Make some chicken and rice.");
    } else if (availableTime === 30) {
      console.log("Make some soup.");
    } else if (availableTime <= 15) {
      console.log("Make some instant noodles.");
    }
  }
}





console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);

