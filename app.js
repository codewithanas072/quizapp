let questions = [
    {
        question: "SMIT STAND........?",
        Option: [
            "Saylani mass it training",
            "Saylani It training",
            "Smit",
            "Saylani"
        ],
        answer: "Saylani mass it training"
    },
    {
        question: "HTML",
        Option: [
            "PL",
            "ML",
            "SL",
            "ALL"
        ],
        answer: "ML"
    },
    {
        question: "JS",
        Option: [
            "PL",
            "ML",
            "SL",
            "ALL"
        ],
        answer: "SL"
    },
    {
        question: "JS",
        Option: [
            "PL",
            "ML",
            "SL",
            "ALL"
        ],
        answer: "SL"
    },
    {
        question: "JS",
        Option: [
            "PL",
            "ML",
            "SL",
            "ALL"
        ],
        answer: "SL"
    },
    {
        question: "JS",
        Option: [
            "PL",
            "ML",
            "SL",
            "ALL"
        ],
        answer: "sl"
    },
    {
        question: "HTML",
        Option: [
            "Markup",
            "Styling",
            "Database",
            "Logic"
        ],
        answer: "Markup"
    },
    {
        question: "CSS",
        Option: [
            "Design",
            "Query",
            "Scripting",
            "Server"
        ],
        answer: "Server"
    },
    {
        question: "RAM",
        Option: [
            "Volatile",
            "Permanent",
            "Storage",
            "Optical"
        ],
        answer: "Optical"
    },
    {
        question: "CPU",
        Option: [
            "Brain",
            "Memory",
            "Display",
            "Power"
        ],
        answer: "Power"
    },
    {
        question: "SQL",
        Option: [
            "Database",
            "Browser",
            "Network",
            "Editor"
        ],
        answer: "Editor"
    },
    {
        question: "API",
        Option: [
            "Interface",
            "Program",
            "Protocol",
            "Network"
        ],
        answer: "Network"
    },
    {
        question: "HTTP",
        Option: [
            "Protocol",
            "Secure",
            "Transfer",
            "Hyper"
        ],
        answer: "Hyper"
    },
    {
        question: "GIT",
        Option: [
            "Version",
            "Backup",
            "Editor",
            "Hosting"
        ],
        answer: "Hosting"
    },
    {
        question: "DOM",
        Option: [
            "Document",
            "Data",
            "Display",
            "Dynamic"
        ],
        answer: "dynamic"
    }
];

let studentData = {};
let index = 0;
let score = 0;

let signupScreen = document.getElementById("signup-screen");
let quizScreen = document.getElementById("quiz-screen");
let startBtn = document.getElementById("start-btn");

let question = document.getElementById("question");
let qno = document.getElementById("qno");
let options = document.querySelectorAll("input[type='radio']");
let label = document.querySelectorAll(".op1 label");
let nextBtn = document.getElementById("next-btn");

// Start Quiz button event
startBtn.addEventListener("click", function () {
    let rollno = document.getElementById("rollno").value.trim();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (rollno === "" || name === "" || email === "") {
        alert("Bhai pehle tamam fields fill karo!");
        return;
    }

    // Save student details
    studentData = { rollno, name, email };

    // Hide signup and show quiz screen
    signupScreen.style.display = "none";
    quizScreen.style.display = "block";

    showQuestion();
});

nextBtn.addEventListener("click", function () {
    nextQuestion();
});

function showQuestion() {
    question.innerText = questions[index].question;
    qno.innerText = "Question " + (index + 1) + " of " + questions.length;

    for (let i = 0; i < 4; i++) {
        options[i].value = questions[index].Option[i];
        label[i].innerText = questions[index].Option[i];
        options[i].checked = false;
    }

    if (index === questions.length - 1) {
        nextBtn.innerText = "Submit";
    }
}

function CheckAnswer() {
    let selectedOption;

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedOption = options[i].value;
            break;
        }
    }

    if (selectedOption == undefined) {
        alert("Bhai select one option");
        return false;
    } else {
        if (selectedOption === questions[index].answer) {
            score = score + 1;
        }
        return true;
    }
}

function nextQuestion() {
    let status = CheckAnswer();
    if (status == true) {
        index = index + 1;
        if (index == questions.length) {
            let finalScore = (score / questions.length) * 100;
            alert("Quiz Submitted!");
            document.getElementById("container").innerHTML = `
                <h1>Quiz Submitted</h1>
                <h2>Student: ${studentData.name}</h2>
                <h3>Roll No: ${studentData.rollno}</h3>
                <br>
                <h2>Score: ${finalScore.toFixed(2)}%</h2>
                <button onclick='window.location.reload()'>Again Test</button>
            `;
        } else {
            showQuestion();
        }
    }
}