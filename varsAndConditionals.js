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

