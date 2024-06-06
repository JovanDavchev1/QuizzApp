let questions = [
    {
        "question": "How many time zones are there in Russia?",
        "answer_1": "9",
        "answer_2": "11",
        "answer_3": "15",
        "answer_4": "13",
        "right_answer": 2
    },
    {
        "question": "What country has the most islands in the world?",
        "answer_1": "Greece",
        "answer_2": "Germany",
        "answer_3": "Canada",
        "answer_4": "Sweden",
        "right_answer": 4
    },
    {
        "question": "What’s the capital of Canada?",
        "answer_1": "Winnipeg",
        "answer_2": "Montreal",
        "answer_3": "Ottawa",
        "answer_4": "Vancouver",
        "right_answer": 3
    },
    {
        "question": "Until 1923, what was the Turkish city of Istanbul called?",
        "answer_1": "Alexandria",
        "answer_2": "Constantinople",
        "answer_3": "Ankara",
        "answer_4": "Antalya",
        "right_answer": 2
    }
];

let currentQuestion = 0
let correctAnswers = 0



function render() {
    showQuestion()
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        if (correctAnswers == 0) {
            document.getElementById('image').src = './img/looser.jpg'
            document.getElementById('progressBar').style = `width: 100%`
        } else {
            document.getElementById('endScreen').style = '';
            document.getElementById('questionBody').style = 'display: none';
            document.getElementById('image').src = './img/trophy.png'
            document.getElementById('image').style = 'padding: 32px;'
            document.getElementById('progressBar').style = `width: 100%`
        }
    } else {

        let procent = currentQuestion / questions.length;
        procent = Math.round(procent * 100);
        document.getElementById('progressBar').style = `width: ${procent}%`

        console.log('show', procent)

        let question = questions[currentQuestion];
        document.getElementById('correctAnswers').innerHTML = correctAnswers
        document.getElementById('amountOfQuestions').innerHTML = questions.length
        document.getElementById('questionLenght').innerHTML = questions.length
        document.getElementById('currentQustion').innerHTML = currentQuestion + 1
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {

    let question = questions[currentQuestion];
    let selectedQuestionNumber = +selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`

    if (selectedQuestionNumber === question['right_answer']) {
        document.getElementById(selection).classList.add('bg-success');
        correctAnswers++
    } else {
        document.getElementById(idOfRightAnswer).classList.add('bg-success');
        document.getElementById(selection).classList.add('bg-danger');
    }
    document.getElementById('nextButton').disabled = false;

}


function nextQuestion() {
    if (currentQuestion <= questions.length) {
        currentQuestion++
    }

    render()
    document.getElementById('nextButton').disabled = true;

    resetAnswerButons()

}
function resetAnswerButons() {
    document.getElementById('answer_1').classList.remove('bg-success');
    document.getElementById('answer_1').classList.remove('bg-danger');

    document.getElementById('answer_2').classList.remove('bg-success');
    document.getElementById('answer_2').classList.remove('bg-danger');

    document.getElementById('answer_3').classList.remove('bg-success');
    document.getElementById('answer_3').classList.remove('bg-danger');

    document.getElementById('answer_4').classList.remove('bg-success');
    document.getElementById('answer_4').classList.remove('bg-danger');
}

function restartGame() {
    document.getElementById('image').src = './img/back.jpg';
    document.getElementById('endScreen').style = 'display: none';
    document.getElementById('questionBody').style = '';
    currentQuestion = 0;
    correctAnswers = 0;
    render()
}
