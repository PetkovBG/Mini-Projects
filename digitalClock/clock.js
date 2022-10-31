const hourEl = document.getElementById('hours');
const minEl = document.getElementById('minutes');
const secEl = document.getElementById('seconds');

function updateTime() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    if(hours < 10){
        hours = '0' + hours;
    }

    if(minutes < 10){
        minutes = '0' + minutes;
    }

    if(seconds < 10){
        seconds = '0' + seconds;
    }

    // minutes = m < 10 ?  '0' + minutes : minutes;
    // seconds = seconds < 10 ? '0' + seconds : seconds;

    hourEl.innerText = hours;
    minEl.textContent = minutes;
    secEl.textContent = seconds;
    setTimeout(() => {
        updateTime();
    }, 1000);
}


updateTime();