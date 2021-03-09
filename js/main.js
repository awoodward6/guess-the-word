/*----- constants -----*/
const questions = {
    one: {
        question: "Question 1",
        hint: "Hint 1", 
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

const keyStatus = {
    'null': null,
    '1': "green",
    '-1': "red",
};

/*----- app's state (variables) -----*/ 
let key, question, guess, end; 

/*----- cached element references -----*/ 
const q= document.querySelector("#question");
const message= document.querySelector("#message");

/*----- event listeners -----*/ 
document.querySelector("#keyboard").addEventListener('click', keyboard); 
document.querySelector("#replay").addEventListener("click", replay); 

/*----- functions -----*/
function init() {
    key = new Array(26); 

    let questionArray= Object.entries(questions);
    let idx = Math.floor(Math.random() * questionArray.length);
    question = questionArray[idx][1];
    // console.log(question);

    guess = 1; 
    end = null; 
    render()
};
init();

function render() {  
    key.forEach(function(btn, idx) {
        document.getElementById(idx).style.color= keyStatus[btn];
    });
    document.querySelector("#replay").style.visibility = "hidden";
    document.querySelector("#hangman").style.visibility = "hidden";
    q.innerHTML = `${question.question} ${question.hint}`;

    document.querySelector("#answer").innerHTML = `${question.answer}`;
    document.querySelector("#answer").style.visibility = "hidden";

    if (end === "complete") {
        message.textContent= "Play again!";
        document.querySelector("#replay").style.visibility  = "visible";
    } else {
         return;
    };
};

function keyboard(evt) {
    
    // let key = document.querySelector("#keyboard");
    //     key.addEventListener("click", function(evt) {
    //     if key === key[idx]
    // });
    // // render();
    // console.log(evt);
};

// function checkGuess() {
//     for (let ans in question) {
//         console.log(ans);
//     };
// };

// function end() {
//     key.forEach(function(scenario) {
//         if (key[scenario[idx]] < 5) {
//             end = guess;
//         };
// });

// function replay() {
// //    console.log("We made it");
// };