//Bullet 1
let name = "Louie";
let age = 33;
let birthday = "November 21";
const detroitGC = true;
const lifeEvents = [
  "I met my wife in New York.",
  "I hold a commercial pilot's license.",
  "Our first born child was born 3.5 years ago.",
  "I moved to Michigan from New York 6 years ago."
];

//Bullet 2
if (detroitGC === true) {
  console.log(
    "My name is " +
      name +
      " and I am a student at Grand Circus in Detroit, Michigan. I am currently " +
      age +
      " years old and my birthday is on " +
      birthday +
      "."
  );
}

//Bullet 3
for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

//Bullet 4
let randomNumber = Math.floor(Math.random() * 10 + 1);

console.log(randomNumber);

//Bullet 5
var counter = 0;

//While loop
while (counter < 10) {
  counter++;
}

console.log(counter);

if (randomNumber != 5) {
  console.log(randomNumber + "!==5");
} else randomNumber != 3;
{
  console.log(
    "5 === 5." +
      " It took " +
      counter +
      " iterations to randomly generate the number 5."
  );
}
