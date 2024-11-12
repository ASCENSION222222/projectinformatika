// Function to fade in the content from the bottom
        window.onload = function() {
            const content = document.querySelector('.content');
            content.classList.add('visible'); // Add the visible class to trigger the animation
            document.body.style.overflow = 'auto'; // Enable scrolling after animation
        };
