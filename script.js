document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');
    const answers = document.querySelectorAll('.answer');
   
    // Reset borders for all questions
    questions.forEach((q, i) => {
        if (i !== questions.length - 1) {
            q.style.borderBottom = '1px solid hsl(292, 16%, 49%, 0.1)';
        }
    });
    // Remove border from the last question
    questions[questions.length - 1].style.borderBottom = 'none';

    // Add hover state style to all questions
    questions.forEach((q, i) => {
        if (q) {
            q.classList.add('hover-state');
        }
    });

    // Reset borders for all answers
    answers.forEach((a, i) => {
        if (i !== questions.length - 1) {
            a.style.borderBottom = '1px solid hsl(292, 16%, 49%, 0.1)';
        }
    });

    // Remove border from the last question
    answers[answers.length - 1].style.borderBottom = 'none';

    
    // Listen for a question click
    questions.forEach(question => {
        question.addEventListener('click', function () {
            // Toggle active class for the clicked header
            this.classList.toggle('active');

            // Find the answer element related to the clicked question
            const answer = this.nextElementSibling;

            const plusIcon = this.querySelector('.icon-plus');
            const minusIcon = this.querySelector('.icon-minus');

            // Check if the answer is already visible
            if (answer.style.display === 'block') {
                answer.style.display = 'none'; 
                plusIcon.style.display = 'block'; 
                minusIcon.style.display = 'none';
                question.style.borderBottom = '1px solid hsl(292, 16%, 49%, 0.1)';
                question.classList.add('hover-state');
            } else {
                answer.style.display = 'block'; 
                plusIcon.style.display = 'none'; 
                minusIcon.style.display = 'block'; 
                question.style.borderBottom = 'none';
                answer.style.borderBottom = '1px solid hsl(292, 16%, 49%, 0.1)';
                question.classList.remove('hover-state');
            }

            
        });
    });
});

