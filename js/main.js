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
let guess, round, finish; //answer var is turn/guess var

/*----- cached element references -----*/ //elements update appearance of using javascript

const message= document.querySelector("message");
// console.log("message");

const board = document.getElementById("keyboard");

/*----- event listeners -----*/ //*should keyboard be a cached elements with a-z as separate objects?
document.querySelector("#keyboard").addEventListener('click', keyboard); //style for right/wrong click
document.querySelector("#replay").addEventListener("click", replay); 

/*----- functions -----*/

function init() {
    //guess var is the user individual keyboard selection
    guess
  
    //round var is game progressing to the next round. *do i need of var if guess complete? return to next obj
    round

    //finish var is final random question - break - end game 
    //and start over with replay button visible. *finish seems like duplicate of round/replay?
    finish = null;
    // render()
};

// init();

function render() {  //taking state variables and putting it in the DOM/screen
    
    // replay.style.display = "hidden";
    // if (round === "complete") {
    //     message.textContent= "It's cashed. Next round!";
    // } else {
    //     return;
    // };
};

function keyboard() {
    // console.log(evt.target);
};

function replay() {
//    console.log("We made it");
};