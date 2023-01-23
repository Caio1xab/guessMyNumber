/*  const markWeight = 90
const markHeight = 1.90

const johnWeight = 92
const johnHeight = 1.95
//92  1.95 

const BMIMark = markWeight / (markHeight ** 2);
const BMIJohn = johnWeight / (johnHeight ** 2);

if (BMIMark >= BMIJohn) {
    alert(`Mark's BMI (${BMIMark}) IS higher than John's (${BMIJohn}) !`)
 } else {
    alert(`Mark's BMI (${BMIMark}) ISN'T higher than Jhon's(${BMIJohn}) !`)
}   */

//Test 1
/* const dolphinsScore1 = 96 + 108 + 89;
const koalasScore1 = 88 + 91 + 110;
console.log(dolphinsScore1, koalasScore1);

 if(dolphinsScore1 > koalasScore1) {
    console.log("Dolphins won !!")
} else {
    console.log("Koalas won !!")
}  */

//TEST 2
/* const dolphinsScore2 = 97 + 112 + 101;
const koalasScore2 = 109 + 95 + 123;
console.log(dolphinsScore2, koalasScore2)

if(dolphinsScore2 > koalasScore2) {
    console.log("Dolphins won !!")
} else {
    console.log("Koalas won !!")
} */

/* const dolphinsScore3 = (90 + 102 + 111) /3;
const koalasScore3 = (100 + 103 + 100) /3;
console.log(dolphinsScore3, koalasScore3);

if(dolphinsScore3 > koalasScore3 && dolphinsScore3 >= 100 ) {
    console.log("Dolphins won!!")
} else if(koalasScore3 > dolphinsScore3 && koalasScore3 >= 100) {
    console.log("Koalas won!!")
} else if(dolphinsScore3 === koalasScore3 && dolphinsScore3 >= 100 && koalasScore3 >= 100 ) {
    console.log("Both win the trophy !!")
} else{
    console.log("nones win the trophy")
} 
 */
/*  const day = 'wednesday';

if( day==='monday'){
    console.log("segunda-feira");
} else if( day==='tuesday'){
    console.log("terça-feira");
} else if( day==='wednesday'){
    console.log("quarta-feira");
} else if( day==='thursday'){
    console.log("quinta-feira");
} else if( day==='friday'){
    console.log("sexta-feira");
} else if( day==='saturday'){
    console.log("sábado");
} else if( day==='sunday'){
    console.log("domingo");
}  */

/* const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console. log(`The bill value was ${bill}, the tip was ${tip}, and the total value
is ${bill + tip}`) */

/* let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;

const markBmi = markWeight  / markHeight ** 2 ;
const johnBmi = johnWeight / johnHeight ** 2 ;
const markHigherBmi = markBmi > johnBmi;
console.log(markBmi, johnBmi, markHigherBmi)

if (markBmi > johnBmi) {
    console.log(`Mark has a higher Bmi and his bmi is ${Math.floor(markBmi)}, meanwhile John's bmi is ${Math.floor(johnBmi)}`)
} else {
    console.log(`John has a higher Bmi and his bmi is ${Math.floor(johnBmi)}, meanwhile John's bmi is ${Math.floor(markBmi)}`)
} */

/* const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125,555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
console.log(tips)  */

/* const caio = {
    firstName: 'Caio',
    lastName: 'Italo',
    birthYear: 2005,
    job: 'student',
    friends: ['Sara','Kaik','Reginaldo'],

    calcAge: function (){
        this.age = 2026 - this.birthYear;
        return this.age;
    }
}; */
//console.log(caio.calcAge()); //first of all you need to access the function.
//console.log(caio.age);  //You can call the const age now.
//console.log(caio.age);
//console.log(caio.age);

/* const question = prompt('What do you want to know about me ? Choose between age, lastName, firstName, job and friends');

if(caio[question]){
    console.log(caio[question])
} else{
    console.log(`this thing you're looking for doesn't exist`)
} */

//console.log(`${caio.firstName} has ${caio.friends.length} friends and his best friend is called ${caio.friends[2]}`)

/* const userNumber2 = {
    userName: 'Carla',
    userLastName: 'Camyle',
    hasDriversLicense: false,
    job: 'Sign Language Translator',
    birthYear: 2005,
    calcAge: function(){
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `The user name is ${this.userLastName}, her last name
        is ${this.userLastName}, and she has ${this.hasDriversLicense ? 'a' : 'not'}
        a driver's license,she works as a ${this.job}, she was born in ${this.birthYear}
        her age is ${this.age}`
    }
}

console.log(userNumber2.calcAge())
console.log(userNumber2.getSummary()) */

//CODING CHALLENGE NUMBER 3 FUNDAMENTALS PART 2
// BMI = mass / height ** 2 = mass / (height * height)

/* const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = Math.floor(this.mass / this.height ** 2) ;
        return this.BMI;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 104,
    height: 1.95,
    calcBMI: function() {
        this.BMI = Math.floor(this.mass / this.height ** 2) ;
        return this.BMI;
    }
}

console.log(mark.calcBMI())
console.log(john.calcBMI())

if (mark.calcBMI() > john.calcBMI()){
    console.log(`${mark.fullName}'s BMI ${mark.calcBMI()} is higher than ${john.fullName}'s BMI ${john.calcBMI()}`)
} else if (mark.calcBMI() < john.calcBMI()) {
    console.log(`${john.fullName}'s BMI ${john.calcBMI()} is higher than ${mark.fullName}'s BMI ${mark.calcBMI()}`)
} else {
    console.log(`their BMI is the same ${mark.calcBMI()} and ${john.calcBMI()}`)
}
 */

//LOOPS

/* console.log('LIFTING WEIGHTS AT THE GYM, REP 1')
console.log('LIFTING WEIGHTS AT THE GYM, REP 2')
console.log('LIFTING WEIGHTS AT THE GYM, REP 3')
console.log('LIFTING WEIGHTS AT THE GYM, REP 4')
console.log('LIFTING WEIGHTS AT THE GYM, REP 5')
console.log('LIFTING WEIGHTS AT THE GYM, REP 6')
console.log('LIFTING WEIGHTS AT THE GYM, REP 7')
console.log('LIFTING WEIGHTS AT THE GYM, REP 8')
console.log('LIFTING WEIGHTS AT THE GYM, REP 9')
console.log('LIFTING WEIGHTS AT THE GYM, REP 10') */

//for loops starts with a variable and then you set the value
//where the loop will stop, you'll define it after the ;
//so in this case ittll increase the value if it is less than 10 till 10
// we could use rep = rep + 1, but we simply use rep++ that does the same

/* for(let rep = 1; rep <= 10; rep++){
    console.log(`LIFTING WEIGHTS AT THE GYM, rep ${rep} `);
} */

/* const caioArray = [
    'Caio',
    'Italo',
    2023-2005,
    'student',
    ['Michael','Jack','Steven']
]; */

/* const types = [];

for(let i = 0 ; i < caioArray.length ; i++){
    //reading from caioArray
    console.log(caioArray[i]);
    //filling types array which had nothing inside.
    //types[i] = typeof caioArray[i];

    types.push(typeof caioArray[i]);
}

console.log(types);

const birthYears = [2008, 1974, 2005, 1980];
const ages = [];

for(let i = 0 ; i < birthYears.length ; i++){
    ages.push( 2023 - birthYears[i] );
}

// continue and break

for(let i = 0; i < caioArray.length; i++){
    if(typeof caioArray[i] !== 'string') continue;

    console.log(caioArray[i], typeof caioArray[i]);
}

for(let i = 0; i < caioArray.length ; i++) {
    if(typeof caioArray[i] !== 'number') break;

    connsole.log(caioArray[i]);
} */

//READING THE caioArray BACKWARDS WITH FOR LOOP

/* for(let i = caioArray.length - 1 ; i >= 0 ; i-- ){
    console.log(caioArray[i]);
}

//Loop inside of another loop.
for(let exercise = 1 ; exercise <= 8 ; exercise++){
    console.log(`-----The exercise Number ${exercise} is being done-----`);

    for(let rep = 1 ; rep <= 10 ; rep++){
        console.log(`This is the ${rep} rep of the exercise ${exercise}`);
    }
} */

//SO RIGHT AT THIS MOMENT WE ARE GOING TO SEE THE DIFFERENCES
//BETWEEN WHILE LOOPS AND FOR LOOPS.

//in the while loop we specify the variable, the action point and the while point in different places
/* let rep = 1;
while (rep<=10){
    console.log(`WHILE: repetition number ${rep}`);
    rep++;
} */
// the while loop is also more versatile

//in the for loop we specify the starting point, while point and the action point between the ()
/* for(let rep = 1; rep<=10 ; rep++){
    console.log(`FOR: repetition number ${rep}`);
} */

//the while loop is the right interation for the job when you
//dont know many times the loops is going to run until you get
// a certain result expected
//WHEN WE KNOW WHEN TE LOOP SHOULD STOP WE ACTUALLY BETTER USE
//THE FOR LOOP

/* let dice = Math.trunc(Math.random() * 6 + 1 );
while(dice !== 6){
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6 + 1 );
    if (dice === 6){
        console.log(`The loop is about to end...`);
    }
} */

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(` The bills are ${bills}, the tips are ${tips} and the totals
// are  ${totals} `);
/* console.log(tips[1],totals[1]); */

/* const calcularMedia = function (arr) {
  let igual = 0;
  for (let i = 0; i < arr.length; i++) {
    igual += arr[i];
  }
  console.log(igual);
  return igual / arr.length;
};

console.log(calcularMedia([5, 3, 4, 15])); */

// for (let i = 0; i <= 10; i++) {
//   console.log(`numero ${i}`);
// }

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// console.log(
//   `... ${data1[0]}C in 1 days...${data1[1]}C in 2 days...${data1[2]}C...in 3 days.`
// );

// const printForecast = function (arr) {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}C in ${i + 1} days...`;
//   }
//   console.log(str);
// };

//printForecast(data1);

/* const ar1 = [13, 14, 15, 41, 21, 12, 56];
console.log(`...${ar1[0]}C...${ar1[1]}C...${ar1[2]}C`);

const tempo = function (arr) {
  let ngc = "";
  for (let i = 0; i < arr.length; i++) {
    ngc += `...${arr[i]}C`;
  }
  console.log(ngc);
};

tempo(ar1); */
