import { getMemoirs } from "./getMemoirApi.js";
// import { memoirList as data } from "./testData.js";

const cardContainer = document.querySelector(".cardContainer")

window.addEventListener("load", getList)

async function getList() {
    const data = await getMemoirs()
    makeCard(data)
}

function makeCard(data) {
    let memoirList = ""

    data.forEach(element => {

        memoirList += `
        <div class='card mb-3 p-3 shadow-sm card-hover' id=${element.memoriId}>
          <h5 id="title">${element.title}</h5>
          <time datetime="YYYY-MM-DD" class="text-muted small">${element.date}</time>
        </div>
        `
    });

    cardContainer.innerHTML = memoirList;

    const card = document.querySelectorAll('.card');
    card.forEach((element) => {
        element.addEventListener("click", getDetail)
    })
}

function getDetail(e) {
    const card = e.target.closest('.card');
    if (card) {
        const url = new URL("http://localhost:5500/frontend/components/memoirDetail.html")
        const param = url.searchParams

        param.append("id", card.id)

        window.location.href = url
    }
}