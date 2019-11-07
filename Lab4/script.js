let name = "Mitch Cuckovich";
let age = 25;
let birthday = "January 24";
let detroitGC = true;
const lifeEvents = ['I was born in Troy, Michigan','I went to Hope College','I went to Junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event','Im a graduate of the front-end bootcamp'
 ]

 if (detroitGC === true) {
     console.log ("My name is", name, "and I am a student at Grand Circus in Detroit, Michigan.", "I am currently", age, "years old and my birthday is", birthday);
      
 }

 for (let i = 0; i < lifeEvents.length; i++) {
     console.log(lifeEvents[i]);
 }

let counter = 0;
while (true) {
let randomNumber =Math.floor(Math.random() * 10) + 1; {
    console.log(randomNumber);
}

if (randomNumber !==5 ) {
console.log ("randomNumber !==5");
counter ++;
}
else {
console.log (5===5, "it took", counter, "iterations to randomly generate the number 5");
break;

} 
}
