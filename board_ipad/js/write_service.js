let boardInputDatas = {
    id: 0,
    title: "",
    content: "",
    tag: "",
};

function setInputsEvent() {
    const titleInput = document.querySelector(".main-article > input:nth-of-type(1)");
    const contentInput = document.querySelector(".main-article > textarea");
    const tagInput = document.querySelector(".main-article > input:nth-of-type(2)");

    titleInput.onkeyup = handleBoardInputOnChange;
    contentInput.onkeyup = handleBoardInputOnChange;
    tagInput.onkeyup = handleBoardInputOnChange;
}

function setButtonEvent() {
    const submitButton = document.querySelector(".write-submit-button");
    submitButton.onclick = handleSubmitOnClick;
}

function handleBoardInputOnChange(e) {
    boardInputDatas = {
        ...boardInputDatas,
        [e.target.name]: e.target.value,
    };
}

function handleSubmitOnClick() {
    saveBoard();
    clear();
}

function saveBoard() {
    let boardDatas = !!localStorage.getItem("boardDatas")
        ? JSON.parse(localStorage.getItem("boardDatas"))
        : [];

    if(boardDatas.length > 0) {
        boardInputDatas.id = boardDatas[boardDatas.length-1].id + 1;
    }

    boardDatas = [
        ...boardDatas,
        boardInputDatas,
    ]

    localStorage.setItem("boardDatas", JSON.stringify(boardDatas));

    alert("메모 작성 완료");
    location.href = "./list.html";
}

function clear() {
    const titleInput = document.querySelector(".main-article > input:nth-of-type(1)");
    const contentInput = document.querySelector(".main-article > textarea");
    const tagInput = document.querySelector(".main-article > input:nth-of-type(2)");
    const inputs = [titleInput, contentInput, tagInput];
    inputs.forEach(input => input.value = "");

    boardInputDatas = {
        title: "",
        content: "",
        tag: "",
    };
}


setInputsEvent();
setButtonEvent();