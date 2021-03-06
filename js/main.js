/*----- constants -----*/
const questions = {
    one: {
        question: "Question 1",
        hint: "Hint 1", //should hint go in objects constant or cached element references
        answer: "Answer 1",
    },
    two: {
        question: "Question 2",
        hint: "Hint 2",
        answer: "Answer 2",
    },
    three: {
        question: "Question 3",
        hint: "Hint 3",
        answer: "Answer 3",
    },
    four: {
        question:"Question 4",
        hint: "Hint 4",
        answer: "Answer 4",
    }
};
// console.log(questions.one.answer);

/*----- app's state (variables) -----*/
let turn, answer, round, finish; //variables that change throughout the time of the game/ as we interact w/ game

/*----- cached element references -----*/
const smileFace = {
    circle: document.querySelector("circle"),
    eyeOne: document.querySelector("eye1"),
    eyeTwo: document.querySelector("eye2"),
    smile: document.querySelector("smile"),
    fill: document.querySelector("fill"),
};
// console.log(smileFace.fill);

/*----- event listeners -----*/
// document.querySelector("").addEventListener('click', ); //event click on keyboard, correct answer
// document.querySelector("").addEventListener('click', keyboard); //event click on keyboard, wrong answer
document.querySelector("#replay").addEventListener("click", replay); //event click on replay button

/*----- functions -----*/

function replay() {
    console.log("We made it!");
};