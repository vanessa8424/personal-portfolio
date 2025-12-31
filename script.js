        const progressBars = document.querySelectorAll('.progress-bar');
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    progressObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5 // animate when 50% of the element is visible
        });

        progressBars.forEach((bar) => {
            progressObserver.observe(bar);
        });

        const cards = document.querySelectorAll('.card');
        const cardObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Array.from(cards).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.2}s`;
                    entry.target.classList.add('show');
                    cardObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        cards.forEach(card => cardObserver.observe(card));
  


          // Define the words to type
        const words = ['Web Developer ', 'Web Designer ', 'UI/UX Designer ', 'Freelancer '];
        let wordIndex = 0;
        let text = '';
        let isDeleting = false;
        let speed = 400; // typing speed

        function type() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                // Remove a character
                text = currentWord.substring(0, text.length - 1);
            } else {
                // Add a character
                text = currentWord.substring(0, text.length + 1);
            }

            document.getElementById('typewriter').textContent = text;

            if (!isDeleting && text === currentWord) {
                // Word is fully typed, wait and start deleting
                isDeleting = true;
                speed = 100; // pause before deleting
            } else if (isDeleting && text === '') {
                // Word is fully deleted, move to next word
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                speed = 400; // typing speed
            }

            setTimeout(type, speed);
        }

        // Start typing
        type();
  
// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
