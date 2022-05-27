
//when I open page the screen should show a button saying start quiz
//once clicked the screen will show
    //a timer of 5 min should show on the left corner of the screen
    // the quiz content should show in the center of the page
//the quiz will show a question with multiple choice answers
// when the question is answered incorrectly the timer will subtract 10 sec of the countdown
//when the timer hits zero or all the questions are answered the game is over
//once the game is over then you can save your initials and score

var body = document.body;
var currentQuestionIndex = -1
// quiz questions and the answer options
var quizQuestions =[
    {
        question: "Inside which HTML tag do we put the JavaScript?",
        answers: ["<scripting>", "<javascript>", "<script>", "<js>"],
        correctAnswer: 2
     },
     {
        question: "How to write an IF statement for executing some code if (i) is NOT equal to 5?",
        answers: ["if i == 5", "if (i == 5)", "if (i <> 5)", "if (i != 5)"],
        correctAnswer: 3
     },
     {
        question: "How do you comment in JavaScript?",
        answers: ["//comment", "'comment'", "/* comment */", "<!-- comment -->"],
        correctAnswer: 0 
     }
];

var time = 120;
var timer;
var display = document.querySelector("#time");

// function to run the quiz

var startBtn = document.getElementById("start-btn");
    startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    // console.log("quiz has begun")
    var start = document.getElementById("start-quiz");
    start.style.display = "none";
    timer = setInterval(startTimer, 1000);
    showQuestion();
}

// code to begin the timer countdown
function startTimer(){
    time = time -1;
    display.textContent = time;
    if (time <= 0){
        endGame();
    }
}

// function to show each question when quiz begins
function showQuestion() {
    if (currentQuestionIndex >= 2) {
        return endGame();
    }
    currentQuestionIndex++;
    console.log("currentQuestionIndex", currentQuestionIndex);

    var currentQuestionData = quizQuestions[currentQuestionIndex];
        var dataTypes = document.createElement('h1');
        var listEl = document.createElement('ol');
    listEl.addEventListener("click", function (e) {
        checkAnswer(e);
    });

    var li1 = document.createElement('li');
        li1.setAttribute("id", "choice1");
        var li2 = document.createElement('li');
        li2.setAttribute("id", "choice2");
        var li3 = document.createElement('li');
        li3.setAttribute("id", "choice3");
      

    dataTypes.textContent = currentQuestionData.question;
    li1.textContent = currentQuestionData.answers[0];
    li2.textContent = currentQuestionData.answers[1];
    li3.textContent = currentQuestionData.answers[2];
    

    var questionContainer = document.getElementById("questionContainer");
    questionContainer.innerHTML = "";
    questionContainer.appendChild(dataTypes);
    dataTypes.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);

}

var answerCounter = 0;

function checkAnswer(e) {
    let currentQuestionData = quizQuestions[currentQuestionIndex];
    let correctChoiceIndex = currentQuestionData.correctAnswer;
    let correctChoiceText = currentQuestionData.answers[correctChoiceIndex];
     
    let results = document.createElement('p');
    var questionContainer = document.getElementById('questionContainer');
    questionContainer.appendChild(results);
    // giving correct or incorrect based on answer given
        if (e.target.textContent === correctChoiceText) {
            answerCounter ++;
            results.textContent = "Correct!"
        } else {
            results.textContent = "Incorrect :(";
            time -= 10;
        }

        setTimeout(showQuestion, 1000);
}

function endGame(){
    clearInterval(timer);
    var finalScore = document.querySelector('.finalscore');
    var endGameScreen = document.querySelector('.done');
    endGameScreen.style.display = "block";
    var hideQuestions = document.querySelector("#questionContainer");
    hideQuestions.style.display = "none";
    finalScore.style.display = "none";
    finalScore.textContent = `Your final score is ${time}`;
    highScores();
}

function highScores() {

    var submitScores = document.querySelector("#submitBtn");
    submitScores.addEventListener("click", function () {
        // capture initials, save to local storage, and go to highscores page
        let initialsEl = document.querySelector("#initials");
        let initials = initialsEl.value;
        let localScores = JSON.parse(localStorage.getItem("highScores"));
        localScores.push({
            name: initials,
            score: time
        });
        localStorage.setItem("highScores", JSON.stringify(localScores));
        window.open("./highscores.html");

    });
};






    // //Timer function
    //     function startTimer(duration, display) {
    //         var timer = duration, minutes, seconds;
    //         setInterval(function () {
    //             minutes = parseInt(timer / 60, 10);
    //             seconds = parseInt(timer % 60, 10);

    //             minutes = minutes < 10 ? "0" + minutes : minutes;
    //             seconds = seconds < 10 ? "0" + seconds : seconds;

    //             display.textContent = minutes + ":" + seconds;

    //             if (--timer < 0) {
    //                 timer = duration;
    //             }
    //         }, 1000);
    //     }
    //     var startbtn = document.getElementById(start-btn)
    //     startbtn.onclick = function () {
    //         var fiveMinutes = 60 * 5,
    //             display = document.querySelector('#time');
    //         startTimer(fiveMinutes, display);
    //     };