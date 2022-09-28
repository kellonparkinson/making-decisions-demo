/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

//Narration - Who has the higher attack?

if (jonSnowAttack > jamieLannisterAttack) {
    console.log('Jon Snow has better attack than Jamie Lannister.')
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log('Jamie Lannister has better attack than Jon Snow.')
} else {
    console.log('Attacks are equal.')
};

//Jon Snow's vitals

let jonSnowHealth = 100;
let jonSnowDefense = 0;

//Jamie Lannister attacks Jon Snow!

if (jonSnowHealth <= jamieLannisterAttack) {
    jonSnowHealth = 0;
    console.log('Jon Snow has been slain.')
} else {
    jonSnowHealth = (jonSnowHealth - jamieLannisterAttack);
    console.log(`Jon Snow's health is down to ${jonSnowHealth}.`)
};

//Jon Snow gains a shield.

jonSnowDefense += 25;

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log('Jon Snow has been slain.')
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
    console.log(`Jon Snow's health is down to ${jonSnowHealth}.`)
};


//Villager throws Jon a health kit worth 50, but can't exceed 100.

if (jonSnowHealth + 50 >= 100) {
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
};

console.log(`Jon Snow's health after the health kit is now ${jonSnowHealth}.`);


//Jamie flips a coin. Heads, Jon gets attacked. Tails, Jon can run away.

let coinLandsHeads = true;

if (coinLandsHeads) {
    console.log('The fight continues.')
} else {
    console.log('Jon is allowed to run away.')
};

//Jamie attacks Jon five times.

for (let i = 0; i < 5; i++) {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
    console.log('Jon is attacked by Jamie!')
};

console.log(`Jon Snow's health is now ${jonSnowHealth}.`);

//Assignment 1: Write logic in the for loop that detects if Jon's health gets 0 or less. In which case, print that Jon is dead, and stop further loop iterations. (See the "break" JS keyword for leaving a loop early).

//Assigment 2: Write the for loop (including the logic you wrote for the first assignment) as a while loop. It should behave exactly the same.