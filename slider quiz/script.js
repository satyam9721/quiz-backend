// Load JSON data (replace with your data source)
const quizData = [
    {
        "id": 1,
        "question": "What is your current website's conversion rate (percentage)?        ",
        "min": "1",
            "max": "5",
            "step": "0.5",
           
    },
    {
        "id": 2,
        "question": "How often do you code?",
        "min": 0,
        "max": 10,
        "step": 1
    }
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById('question');
const sliderElement = document.getElementById('slider');
const sliderValueElement = document.getElementById('slider-value');
const submitButton = document.getElementById('submit-button');

// Function to load the current question
function loadQuestion(index) {
    const currentQuestion = quizData[index];
    questionElement.textContent = `Question ${currentQuestion.id}: ${currentQuestion.question}`;
    sliderElement.min = currentQuestion.min;
    sliderElement.max = currentQuestion.max;
    sliderElement.step = currentQuestion.step;
    sliderElement.value = (currentQuestion.min + currentQuestion.max) / 2;
    sliderValueElement.textContent = sliderElement.value;
}

// Initialize the quiz
loadQuestion(currentQuestionIndex);

// Event listener for the slider
sliderElement.addEventListener('input', () => {
    sliderValueElement.textContent = sliderElement.value;
});

// Event listener for the submit button
submitButton.addEventListener('click', () => {
    // Save the user's response, e.g., in an array or data structure
    const userResponse = {
        questionId: quizData[currentQuestionIndex].id,
        response: sliderElement.value
    };

    // Go to the next question or finish the quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        // Quiz is finished, display results or perform any necessary actions
        alert('Quiz Finished! You can process the results here.');
    }
});
