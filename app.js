document.addEventListener('DOMContentLoaded', () => {
    const flame = document.querySelector('.flame');
    const timerElement = document.getElementById('timer');
    const birthdayTextElement = document.querySelector('.happy-birthday');
    let countdown = 10;

    const birthdayMessage = "تولدت مبارک عشق من ❤️ دوستت دارم زیاد";
    let charIndex = 0;

    function typeBirthdayMessage() {
        if (charIndex < birthdayMessage.length) {
            birthdayTextElement.textContent += birthdayMessage.charAt(charIndex);
            charIndex++;
            setTimeout(typeBirthdayMessage, 150); 
        }
    }

    setTimeout(typeBirthdayMessage, 4500);

    const countdownInterval = setInterval(() => {
        countdown--;
        if (timerElement) {
            timerElement.textContent = countdown;
        }

        if (countdown <= 0) {
            clearInterval(countdownInterval);
            if (flame) {
                flame.classList.add('out');
            }
            if (timerElement) {
                timerElement.parentElement.textContent = "😘 هوررررررا!! ماچ به کلت";
            }
        }
    }, 1000);

    const cake = document.querySelector('.cake');
    if (cake) {
        cake.style.animation = 'none';
        cake.offsetHeight; 
        cake.style.animation = null;
    }
    
    function launchConfetti() {
        const confettiContainer = document.querySelector('.confetti-container');
        if (!confettiContainer) return;

        const colors = ["#FFD700", "#FF6347", "#ADFF2F", "#1E90FF", "#FF69B4", "#BA55D3", "#00FA9A", "#FF4500", "#7FFF00", "#F4A460", "#8A2BE2"];
        const numConfetti = 150; 
        for (let i = 0; i < numConfetti; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');

            confetti.style.left = Math.random() * 100 + 'vw'; 
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; 
            confetti.style.width = (Math.random() * 6 + 4) + 'px'; 
            confetti.style.height = (Math.random() * 15 + 10) + 'px'; 
            confetti.style.opacity = Math.random() * 0.4 + 0.6; 

            const duration = Math.random() * 5 + 4; 
            const delay = Math.random() * 6;     
            
            confetti.style.animationDuration = duration + 's';
            confetti.style.animationDelay = delay + 's';

            confettiContainer.appendChild(confetti);
        }
    }

    setTimeout(launchConfetti, 3500); 
});
