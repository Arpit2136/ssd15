	(function() {
	  const myQuestions = [
	    {
	      question: "Which of the following commands is known as stream editor?",
	      answers: {
	        a: "sed",
	        b: "tr",
	        c: "grep"
	      },
	      correctAnswer: "a"
	    },
	    {
	      question: "What is the correct syntax for using sed?",
	      answers: {
	        a: "sed options file(s)",
	        b: "sed options ‘action’",
	        c: "sed options ‘address action’ file(s)"
	      },
	      correctAnswer: "c"
	    },
	    {
	      question: " Which one of the following command will be used for quitting after selecting 3 lines from file emp.lst?",
	      answers: {
	        a: "sed -n 3 emp.lst",
	        b: "sed -i 1-3 emp.lst",
	        c: "sed ‘3q’ emp.lst"
	        
	      },
	      correctAnswer: "c"
		},
		{
			question: " Which of the following command is used with sed for outputting as well as printing the selected lines?",
			answers: {
			  a: "q",
			  b: "n",
			  c:"p"
			  
			  
			},
			correctAnswer: "c"
		  }
		  ,
		{
			question: "To suppress the behavior of ‘p’ command of sed, we use ____ option.",
			answers: {
			   a: "-q",
			  b: "-n",
			  c:"-p"
			  
			  
			  
			},
			correctAnswer: "b"
		  }
		  ,
		  {
			  question: "The command $ sed -n ‘$p’ emp.lst will display the last line.",
			  answers: {
				a: "True",
				b: "False"
				
			  },
			  correctAnswer: "a"
			}
			,
			{
				question: " Consider the following commands. $ sed -n ‘1,2p’ emp.lst $ sed -n ‘3,$!p’ emp.lst. The output of both commands will be the same.",
				answers: {
				a: "True",
				b: "False"
				
				  
				},
				correctAnswer: "a"
			  },
			  {
				question: "Which option is used with sed for using multiple instructions?",
				answers: {
				
				  a: "-n",
				  b: "-e",
				  c:"-f and -e"
				  
				  
				},
				correctAnswer: "c"
			  },
			  {
				question: " Which option is used for displaying the line numbers containing the pattern along with lines?",
				answers: {
				  a: "-f",
				  b: "-e",
				  c:"-i"
				  
				  
				},
				correctAnswer: "a"
			  },
			  {
				question: "To perform context addressing, we have to enclose the pattern in ____",
				answers: {
				  a: "double quotes",
				  b: "single quotes",
				  c:"/ /"
				  
				  
				},
				correctAnswer: "c"
			  }
	  ];

	  function buildQuiz() {
	    // we'll need a place to store the HTML output
	    const output = [];

	    // for each question...
	    myQuestions.forEach((currentQuestion, questionNumber) => {
	      // we'll want to store the list of answer choices
	      const answers = [];

	      // and for each available answer...
	      for (letter in currentQuestion.answers) {
	        // ...add an HTML radio button
	        answers.push(
	          `<label>
	             <input type="radio" name="question${questionNumber}" value="${letter}">
	              ${letter} :
	              ${currentQuestion.answers[letter]}
	           </label>`
	        );
	      }

	      // add this question and its answers to the output
	      output.push(
	        `<div class="slide">
	           <div class="question"> ${currentQuestion.question} </div>
	           <div class="answers"> ${answers.join("")} </div>
	         </div>`
	      );
	    });

	    // finally combine our output list into one string of HTML and put it on the page
	    quizContainer.innerHTML = output.join("");
	  }

	  function showResults() {
	    // gather answer containers from our quiz
	    const answerContainers = quizContainer.querySelectorAll(".answers");

	    // keep track of user's answers
	    let numCorrect = 0;

	    // for each question...
	    myQuestions.forEach((currentQuestion, questionNumber) => {
	      // find selected answer
	      const answerContainer = answerContainers[questionNumber];
	      const selector = `input[name=question${questionNumber}]:checked`;
	      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

	      // if answer is correct
	      if (userAnswer === currentQuestion.correctAnswer) {
	        // add to the number of correct answers
	        numCorrect++;

	        // color the answers green
	        answerContainers[questionNumber].style.color = "lightgreen";
	      } else {
	        // if answer is wrong or blank
	        // color the answers red
	        answerContainers[questionNumber].style.color = "red";
	      }
	    });

	    // show number of correct answers out of total
	    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
	  }

	  function showSlide(n) {
	    slides[currentSlide].classList.remove("active-slide");
	    slides[n].classList.add("active-slide");
	    currentSlide = n;
	    
	    if (currentSlide === 0) {
	      previousButton.style.display = "none";
	    } else {
	      previousButton.style.display = "inline-block";
	    }
	    
	    if (currentSlide === slides.length - 1) {
	      nextButton.style.display = "none";
	      submitButton.style.display = "inline-block";
	    } else {
	      nextButton.style.display = "inline-block";
	      submitButton.style.display = "none";
	    }
	  }

	  function showNextSlide() {
	    showSlide(currentSlide + 1);
	  }

	  function showPreviousSlide() {
	    showSlide(currentSlide - 1);
	  }

	  const quizContainer = document.getElementById("quiz");
	  const resultsContainer = document.getElementById("results");
	  const submitButton = document.getElementById("submit");

	  // display quiz right away
	  buildQuiz();

	  const previousButton = document.getElementById("previous");
	  const nextButton = document.getElementById("next");
	  const slides = document.querySelectorAll(".slide");
	  let currentSlide = 0;

	  showSlide(0);

	  // on submit, show results
	  submitButton.addEventListener("click", showResults);
	  previousButton.addEventListener("click", showPreviousSlide);
	  nextButton.addEventListener("click", showNextSlide);
	})();
