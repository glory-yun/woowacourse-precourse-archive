import { getMemoirs } from "../API/getMemoirApi.js";
import { BASE_URL } from "../config.js";

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
                <h5 class="mb-2">${element.title}</h5>
                <div class="d-flex justify-content-between align-items-end">
                <time class="text-muted small" datetime="${element.date}">
                    ${element.date}
                </time>
                <span class="text-muted small">${element.username}</span>
                </div>
            </div>
            `
    })

    cardContainer.innerHTML = memoirList;

    const card = document.querySelectorAll('.card');
    card.forEach((element) => {
        element.addEventListener("click", getDetail)
    })
}

function getDetail(e) {
    const card = e.target.closest('.card');
    if (card) {
        const url = new URL(`${BASE_URL}/memoirDetail.html`)
        const param = url.searchParams

        param.append("id", card.id)

        window.location.href = url
    }
}