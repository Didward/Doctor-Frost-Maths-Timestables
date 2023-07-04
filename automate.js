// Get the question and input elements
const questionElement = document.getElementById('question');
const inputElement = document.getElementById('calculator-display');

// Function to calculate the answer based on the question
function calculateAnswer(question) {
  // Extract the numbers and operator from the question
  const [num1, operator, num2] = question.split(' ');

  // Perform the calculation
  let answer;
  switch (operator) {
    case '×':
      answer = parseInt(num1) * parseInt(num2);
      break;
    case '÷':
      answer = parseInt(num1) / parseInt(num2);
      break;
  }

  return answer;
}

// Function to handle the input change event
function handleInputChange() {
  // Get the current question
  const currentQuestion = questionElement.innerText;

  // Calculate the answer for the current question
  const answer = calculateAnswer(currentQuestion);

  // Update the input value with the answer
  inputElement.value = answer;
}

// Attach event listener for input changes
inputElement.addEventListener('input', handleInputChange);
