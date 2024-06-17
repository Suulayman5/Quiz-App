const questions = [
    {
        question: 'Which is the largest animal in the world ?',
        answers:[
            {text: 'Shark', correct: false},
            {text: 'Ant', correct: false},
            {text: 'Blue whale', correct: true},
            {text: 'Tiger', correct: false},
        ]
    },{
        question: 'Which is the smallest continent in the world ?',
        answers:[
            {text: 'Asia', correct: false},
            {text: 'Australia', correct: true},
            {text: 'Africa', correct: false},
            {text: 'Arctic', correct: false},
        ]
    },{
        question: 'How many bones do we have in an ear?',
        answers:[
            {text: '5', correct: false},
            {text: '8', correct: false},
            {text: '4', correct: false},
            {text: '3', correct: true},
        ]
    },{
        question: 'How many days are there in July?',
        answers:[
            {text: '29', correct: false},
            {text: '28', correct: false},
            {text: '31', correct: true},
            {text: '30', correct: false},
        ]
    },{
        question: 'What is the capital of Finland?',
        answers:[
            {text: 'Abuja', correct: false},
            {text: 'Texes', correct: false},
            {text: 'Helsinki', correct: true},
            {text: 'Tokyo', correct: false},
        ]
    },{
        question: 'What language is spoken in Brazil?',
        answers:[
            {text: 'English', correct: false},
            {text: 'Ebira', correct: false},
            {text: 'Portuguese', correct: true},
            {text: 'French', correct: false},
        ]
    }
]

const questionElement = document.getElementById('question')
const answerbtn = document.getElementById('answer-button')
const nextbtn = document.getElementById('next-btn')

let currentQuestion = 0
let score = 0

function startQuiz (){
    currentQuestion =0
    score = 0
    nextbtn.innerHTML ='Next'
    showQuestion()
}
         
function showQuestion(){
    resetState()
    let currentQuestions = questions[currentQuestion]
    let questionNo = currentQuestion + 1
    questionElement.innerHTML = questionNo + '. ' + currentQuestions.question

    currentQuestions.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        answerbtn.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    });
}

function resetState(){
    nextbtn.style.display = 'none'
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild)
    }
}
function selectAnswer(e){
    const SelectedBtn = e.target
    const isCorrect = SelectedBtn.dataset.correct === 'true'

    if (isCorrect) {
        SelectedBtn.classList.add('correct')
        score ++
    }else{
        SelectedBtn.classList.add('incorrect')
    }
    Array.from(answerbtn.children).forEach(button =>{
        if (button.dataset.correct === 'true') {
            button.classList.add('correct')
        }
        button.disabled = true
    })
    nextbtn.style.display = 'block'
    }
    function showScore(){
        resetState()
        questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`
        nextbtn.innerHTML = 'Play Again'
        nextbtn.style.display = 'block'
    }

    function handleNextBtn(){
        currentQuestion++
        if (currentQuestion < questions.length) {
            showQuestion()
        }else{
            showScore()
        }
    }


nextbtn.addEventListener('click', ()=>{
    if (currentQuestion < questions.length) {
        handleNextBtn()
    }else{
        startQuiz()
    }
})
startQuiz()

