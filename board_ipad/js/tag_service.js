function loadList() {
    let boardDatas = !!localStorage.getItem("boardDatas")
        ? JSON.parse(localStorage.getItem("boardDatas"))
        : [];

    const boardList = document.querySelector(".tag-board-list-container");
    boardList.innerHTML = boardDatas.map(data => `
        <li class="tag-board-box">
            <header class="tag-boarder-header">
                <h3>#${data.tag}</h3>
            </header>
        </li>
        `).join("");
}

loadList();