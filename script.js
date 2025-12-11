let questions = [
    {
        question: "HTML stands for?",
        answers: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hot Mail"],
        correct: 0
    },
    {
        question: "CSS is used for?",
        answers: ["Styling", "Programming", "Databases"],
        correct: 0
    },
    {
        question: "JavaScript runs in?",
        answers: ["Browser", "Washing Machine", "TV Remote"],
        correct: 0
    },
    {
        question: "Which symbol starts a comment in JS?",
        answers: ["//", "--", "##"],
        correct: 0
    },
    {
        question: "Which tag makes a paragraph?",
        answers: ["<p>", "<para>", "<h1>"],
        correct: 0
    },
    {
        question: "CSS stands for?",
        answers: ["Cascading Style Sheets", "Creative Style System", "Color System Sheet"],
        correct: 0
    }
];

let index = 0;
let score = 0;

// Start Quiz
function startQuiz() {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("quizPage").style.display = "block";
    showQuestion();
}

// Show question
function showQuestion() {
    let q = questions[index];
    document.getElementById("question").innerText = q.question;

    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach((ans, i) => {
        let btn = document.createElement("button");
        btn.innerText = ans;
        btn.onclick = () => selectAnswer(i);
        answersDiv.appendChild(btn);
    });
}

let selected = null;

function selectAnswer(i) {
    selected = i;
}

// Next question
function nextQuestion() {
    if (selected === null) {
        alert("Please select an answer!");
        return;
    }

    if (selected === questions[index].correct) score++;

    selected = null;
    index++;

    if (index < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Result page
function showResult() {
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block";

    document.getElementById("scoreText").innerText =
        score + " out of " + questions.length;
}

// Restart
function restart() {
    index = 0;
    score = 0;
    selected = null;

    document.getElementById("resultPage").style.display = "none";
    document.getElementById("startPage").style.display = "block";
}
