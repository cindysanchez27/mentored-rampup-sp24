const questions = [
  {
    question: "who's most likely to be late to work session",
    choices: ["angie", "cindy", "colin", "dominic", "justin", "kinton", "saadhvi"],
    answer: 6
  },
  {
    question: "who's most likely to not go to retreat",
    choices: ["angie", "cindy", "colin", "dominic", "justin", "kinton", "saadhvi"],
    answer: 2
  },
  {
    question: "who's most likely to throw up at retreat",
    choices: ["angie", "cindy", "colin", "dominic", "justin", "kinton", "saadhvi"],
    answer: 5
  },
  {
    question: "who's most likely to shit on anthony",
    choices: ["angie", "cindy", "colin", "dominic", "justin", "kinton", "saadhvi"],
    answer: 4
  },
  {
    question: "who's most likely to miss work session for a sneaky link",
    choices: ["angie", "cindy", "colin", "dominic", "justin", "kinton", "saadhvi"],
    answer: [2, 3]
  },
  {
    question: "who's most likely to be the worst on aux",
    choices: ["angie", "cindy", "colin", "dominic", "justin", "kinton", "saadhvi"],
    answer: 4
  },
  {
    question: "who's most likely to pour milk before cereal",
    choices: ["angie", "cindy", "colin", "dominic", "justin", "kinton", "saadhvi"],
    answer: 4
  }
];

function checkAnswer(question_number, user_answer) {
  const feedback = document.getElementsByClassName("feedback");
  const button = document.getElementsByClassName("choice");
  const results = document.getElementsByClassName("results");
  var currentFeedback = feedback[question_number];
  var currentButton = button[question_number];
  var currentResult = results[question_number];
  if (question_number == 4) {
    if (questions[question_number].answer[0] == user_answer || questions[question_number].answer[1] == user_answer) {
        currentFeedback.textContent = "Correct!";
        currentFeedback.style.color = 'red';
    } else {
      currentFeedback.textContent = "Incorrect!";
      currentFeedback.style.color = 'red';
    }
  } else if (questions[question_number].answer == user_answer) {
    currentFeedback.textContent = "Correct!";
  } else {
    currentFeedback.textContent = "Incorrect!";
  }

  if (currentFeedback.textContent == 'Correct!') {
    currentFeedback.style.color = 'green';
  } else {
    currentFeedback.style.color = 'red';
  }
  currentResult.textContent = "see results";
  currentResult.style.background = 'white';
}

function showPicture(question_number) {
  const modal = document.getElementsByClassName("all_modals");
  var span = document.getElementsByClassName("close");
  var currentModal = modal[question_number]
  var currentClose = span[question_number]
  currentModal.style.display = "block";


  currentClose.onclick = function() {
    currentModal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == currentModal) {
      currentModal.style.display = "none";
    }
  }
}

function restart() {
  location.reload();
}