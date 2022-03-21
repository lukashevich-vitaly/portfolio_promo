const timerBlock = document.querySelector('.timer__time');
const deadline = '31 march 2022';
let interval

const updateClock = () => {
    const date = new Date().getTime();
    const dateDeadline = new Date(deadline).getTime();
    const dateRemaining = (dateDeadline - date) / 1000;
    
    const days = Math.floor(dateRemaining / 60 /60 /24);
    const hours = Math.floor(dateRemaining / 60 /60);
    const minutes = Math.floor((dateRemaining / 60) % 60);
    const seconds = Math.floor(dateRemaining % 60);
    
    const fdays = days < 10 ? '0' + days : days;
    const fHours = (hours - fdays*24) < 10 ? '0' + (hours - fdays*24) : (hours - fdays*24);
    const fMinutes = minutes < 10 ? '0' + minutes : minutes;
    const fSeconds = seconds < 10 ? '0' + seconds : seconds;

    timerBlock.textContent = `${fdays}:${fHours}:${fMinutes}:${fSeconds}`;

    if (dateRemaining <= 0) {
        clearInterval(interval)
        timerBlock.textContent = '00:00:00';
    };
};

updateClock();

interval = setInterval(updateClock, 500);



