/*----- constants -----*/
const questions = {
    one: {
        question: "Question 1",
        hint: "Hint 1", //should hint go in objects constant or cached element references? obj constant.
        answer: "Answer 1", //should answer be a separate constant block?
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
    },
};
// console.log(questions.one.answer);

const smileFace = {
    circle: document.querySelector("#circle"),
    eyeOne: document.querySelector("#eye1"),
    eyeTwo: document.querySelector("#eye2"),
    smile: document.querySelector("#smile"),
    fill: document.querySelector("#fill"),
    'null': null, //null when no guess. 
};
//  console.log(smileFace.fill);

/*----- app's state (variables) -----*/ //variables that change as we interact w/ game.
let key, guess, finish; 

/*----- cached element references -----*/ //elements update appearance of using javascript
const message= document.querySelector("message");
// console.log("message");
// const board = document.querySelector("keyboard");
// const replayBtn = document.querySelector("replay");

/*----- event listeners -----*/ //*should keyboard be a cached elements with a-z as separate objects?
document.querySelector("#keyboard").addEventListener('click', keyboard); 
document.querySelector("#replay").addEventListener("click", replay); 
// board.addEventListener('click, handleClick);
// replayBtn.addEventListener('click', init);

/*----- functions -----*/

function init() {
    //key var is the board
    key = new Array(26);
    //guess is the user individual keyboard selection
    guess = 1;
    //finish var is final random question - break - end game 
    //and start over with replay button visible. 
    finish = null;
    // render()
};
// init();

function randomQ() {
    let questions = Object.keys(questions);
    let randomIdx = Math.floor(Math.random() * question.length);
    return questions[randomIdx];
};
console.log(questions);

function render() {  //taking state variables and putting it in the DOM/screen
    // replay.style.display = "none";
    // if (guess === "complete") {
    //   message.textContent= "It's cashed. Next round!";
    //   replay.style.display = "block";
    // } else if {
    //     return;
    // };
};

function keyboard() {
    // console.log(evt.target);
};

function replay() {
//    console.log("We made it");
};