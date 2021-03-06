/*----- constants -----*/
const questions = {
    one: {
        question: "Question 1",
        hint: "Hint 1", //should hint go in objects constant or cached element references? obj constant.
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
let turn, round, finish; //variables that change as we interact w/ game. answer var is turn var

/*----- cached element references -----*/
const smileFace = {
    circle: document.querySelector("#circle"),
    eyeOne: document.querySelector("#eye1"),
    eyeTwo: document.querySelector("#eye2"),
    smile: document.querySelector("#smile"),
    fill: document.querySelector("#fill"),
};
//  console.log(smileFace.fill);

/*----- event listeners -----*/ //should keyboard be a cached elements with a-z as objects?
document.querySelector("#keyboard").addEventListener('click', keyboard); //style for right/wrong click
document.querySelector("#replay").addEventListener("click", replay); 

/*----- functions -----*/

function init() {

    render()
};

function keyboard() {
    // console.log(evt.target);
};

function replay() {
//    console.log("We made it");
};