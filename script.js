const updateClock = () => {
    const time = document.getElementById("time");

    const date = new Date();

    let hours = date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let meridian = hours >= 12 ? 'PM' : 'AM';

    if (hours > 12) {
        hours -= 12;
    }

    const clockTime = `${hours < 10 ? `0${hours}` : hours}:${minutes} ${meridian}`;

    time.innerText = clockTime;
}

updateClock();

setInterval(updateClock, 1000);