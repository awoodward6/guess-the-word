/*----- constants -----*/
const questions = {
    one: {
        question: "Question 1",
        hint: "Hint 1", 
    },
    two: {
        question: "Question 2",
        hint: "Hint 2",
    },
    three: {
        question: "Question 3",
        hint: "Hint 3",
    },
    four: {
        question:"Question 4",
        hint: "Hint 4",
    },
};
// console.log(questions.one.answer);

const answers = {
    one: {
        answer: "Answer 1", 
    },
    two: {
        answer: "Answer 2",
    },
    three: {
        answer: "Answer 3",
    },
    four: {
        answer: "Answer 4",
    },
}; 

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
let key, question, guess, finish; 

/*----- cached element references -----*/ //elements update appearance of using javascript
const q= document.querySelector("#question");
const h=document.querySelector("#hint");
const message= document.querySelector("#message");
// console.log("message");

/*----- event listeners -----*/ 
document.querySelector("#keyboard").addEventListener('click', keyboard); 
document.querySelector("#replay").addEventListener("click", replay); 

/*----- functions -----*/
function init() {
    key = new Array(26); //key var is the board
    let questionArray= Object.entries(questions)
    let idx = Math.floor(Math.random() * questionArray.length);
    question = questionArray[idx][1];
    console.log(question);
    guess = 1; //guess is the user individual selection
    finish = null; //finish var is final q - break - end game. start over with replay button visible. 
    render()
};
init();

function render() {  //taking state variables and putting it in the DOM/screen
    document.querySelector("#question").innerHTML = `${question.question} ${question.hint}`;
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