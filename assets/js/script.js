
//when I open page the screen should show a button saying start quiz
//once clicked the screen will show
    //a timer of 5 min should show on the left corner of the screen
    // the quiz content should show in the center of the page
//the quiz will show a question with multiple choice answers
// when the question is answered incorrectly the timer will subtract 10 sec of the countdown
//when the timer hits zero or all the questions are answered the game is over
//once the game is over then you can save your initials and score

function startQuiz(){
    //console.log("quiz has begun")
    var start = document.getElementById("quiz-prompt");
    if (start.style.display === "none") {
        start.style.display = "block";
      } else {
        start.style.display = "none";
      }

    
}


var questions = [
    {
       questionId: 1, 
       q: "Inside which HTML element do we put the JavaScript?",
       a: [ { text: "<scripting>", isCorrect: false },
            { text: "<javascript>", isCorrect: false },
            { text: "<script>", isCorrect: true },
            { text: "<js>", isCorrect: false }
          ]
    },
    {
        questionId: 2,
        q: "How to write an IF statement for executing some code if (i) is NOT equal to 5?",
        a: [{ text: "if i == 5", isCorrect: false,},
            { text: "if (i == 5)", isCorrect: false },
            { text: "if (i <> 5)", isCorrect: false },
            { text: "if (i != 5)", isCorrect: true }
        ]
  
    },
    {
        questionId: 3,
        q: "How do you comment in JavaScript?",
        a: [{ text: "//comment", isCorrect: true },
            { text: "'comment'", isCorrect: false },
            { text: "/* comment */", isCorrect: false },
            { text: "<!-- comment -->", isCorrect: false }
        ]
  
    }
]





    //Timer function
        function startTimer(duration, display) {
            var timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }

        window.onload = function () {
            var fiveMinutes = 60 * 5,
                display = document.querySelector('#time');
            startTimer(fiveMinutes, display);
        };