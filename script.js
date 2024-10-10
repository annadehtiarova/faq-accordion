document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');
   

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
            } else {
                answer.style.display = 'block'; 
                plusIcon.style.display = 'none'; 
                minusIcon.style.display = 'block'; 
                question.style.borderBottom = 'none';
                answer.style.borderBottom = '1px solid hsl(292, 16%, 49%, 0.1)';
            }
        });
    });
});

