const quizContainer = document.getElementById("quizContainer");
const submitButton = document.getElementById("submitButton");
const resultContainer = document.getElementById("resultContainer");

const allQuestions = [
    {
        question:"C# is a programming language, developed by ___.",
        answers: {
            a: "Oracle",
            b: "Microsoft",
            c: "GNU project",
            d: "Google"
        },
        correct_answer: "b"
    },
    {
        question:"C# runs on the ___.",
        answers: {
            a: ".NET Framework",
            b: "Java Virtual Machine",
            c: "Both a. and b.",
            d: "None of the above"
        },
        correct_answer: "a"
    },
    {
        question:"Which of the following is correct about dynamic Type in C#?",
        answers: {
            a: "You can store any type of value in the dynamic data type variable.",
            b: "Type checking for these types of variables takes place at run-time.",
            c: "Both of the above.",
            d: "None of the above."
        },
        correct_answer: "c"
    }
];

function generateQuizData() {
    const output = [];

    allQuestions.forEach((currentQuestion, questionNumber) => {
        const answers =[];
        for(letter in currentQuestion.answers) {
            answers.push (
            `<label><input type="radio" name="question${questionNumber}" value="${letter}" />${letter}. ${currentQuestion.answers[letter]}</label><br>`
            );
        }

        let data = "";
        if(questionNumber > 0) {
            data = "<br>"
        }
        output.push(
            `${data}<div class="question">${questionNumber + 1}. ${currentQuestion.question} </div><div class="answers">${answers.join('')}</div>`
        )
    });
    quizContainer.innerHTML = output.join('');
}

function displayResults() {
    const answersData = quizContainer.querySelectorAll(".answers");
    let correctAnswers = 0;

    allQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answersData[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
        if(userAnswer === currentQuestion.correct_answer) {
            correctAnswers++;
            answersData[questionNumber].style.color = "green";
        }
        else {
            answersData[questionNumber].style.color = "red";
        }
    });

    resultContainer.innerHTML = `Correct answers: ${correctAnswers} out of ${allQuestions.length} `
}

generateQuizData();

submitButton.addEventListener("click", displayResults);