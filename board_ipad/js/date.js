function dateRun() {
    const ipadDate = document.querySelector(".ipad-date");
    setInterval(() => {
        const now = new Date();
        const nowMonth = now.getMonth() + 1;
        const nowDate = now.getDate();
        const dateNum = now.getDay();
        const dayList = ['일', '월', '화', '수', '목', '금', '토'];
        const nowDay = dayList[dateNum];
        const nowDateText = `${nowMonth}월 ${nowDate}일 ${nowDay}요일`;
        ipadDate.innerHTML = nowDateText;
    }, 1000);
}

dateRun();