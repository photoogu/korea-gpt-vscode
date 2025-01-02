function clockRun() {
    const ipadClock = document.querySelector(".ipad-clock");
    setInterval(() => {
        const now = new Date();
        const nowMeridiem = now.getHours() < 12 ? "오전" : "오후";
        const nowHours = now.getHours() < 12 ? now.getHours() : (now.getHours() - 12);
        const nowMinutes = now.getMinutes() < 10 ? `0${now.getMinutes}` : now.getMinutes();
        const nowClockText = `${nowMeridiem} ${nowHours}:${nowMinutes}`;
        ipadClock.innerHTML = nowClockText;
    }, 500);
}

clockRun();