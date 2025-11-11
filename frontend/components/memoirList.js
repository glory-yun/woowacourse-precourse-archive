import { getMomoirDetail } from "./getApi.js";

const cardContainer = document.querySelector(".cardContainer")

window.addEventListener("load", getList)

async function getList() {

    //const data = await getMomoirDetail();
    const data = [
        {
            "id": 1,
            "title": "첫 번째 회고록",
            "date": "2025-11-01"
        },
        {
            "id": 2,
            "title": "두 번째 회고록",
            "date": "2025-11-03"
        },
        {
            "id": 3,
            "title": "세 번째 회고록",
            "date": "2025-11-05"
        }
    ]
    //data = JSON.parse(data)

    makeCard(data)
}

function makeCard(data) {
    let memoirList = ""

    data.forEach(element => {

        memoirList += `
        <div class='card' id=${element.id}>
          <p id="title">${element.title}</p>
          <time datetime="YYYY-MM-DD">${element.date}</time>
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