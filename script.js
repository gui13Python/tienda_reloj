// Temporizador de oferta (expira em 24 horas)
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    const endTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 horas a partir de agora

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            countdownElement.textContent = "Oferta Expirada!";
            return;
        }

        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Iniciar o temporizador ao carregar a página
document.addEventListener('DOMContentLoaded', startCountdown);