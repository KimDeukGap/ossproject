document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('timer');
    const roundElement = document.querySelector('#room-info span');
    
    let timeLeft = 30;
    let currentRound = 1;
    const maxRound = 5;
    let countdown;

    function startTimer() {
        if (countdown) clearInterval(countdown);

        countdown = setInterval(() => {
            timeLeft--;
            timerElement.textContent = `남은 시간: ${timeLeft}초`;

            if (timeLeft < 10) {
                timerElement.style.color = "red";
                timerElement.style.fontWeight = "bold";
            } else {
                timerElement.style.color = "black";
                timerElement.style.fontWeight = "normal";
            }

            if (timeLeft <= 0) {
                clearInterval(countdown);
                nextRound();
            }
        }, 1000);
    }

    function nextRound() {
        if (currentRound < maxRound) {
            currentRound++;
            timeLeft = 30;
            roundElement.textContent = `라운드: ${currentRound}/${maxRound}`;
            alert(`${currentRound} 라운드를 시작합니다!`);
            startTimer();
        } else {
            alert("모든 라운드가 종료되었습니다!");
            timerElement.textContent = "게임 종료";
        }
    }

    startTimer();
});