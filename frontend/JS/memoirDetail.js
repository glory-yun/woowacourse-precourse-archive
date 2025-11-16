import { getMomoirDetail, deleteMemoir } from "../API/getMemoirApi.js"

window.addEventListener("load", getDetail)

const url = new URL(window.location.href)
const id = url.searchParams.get("id")

async function getDetail() {
    const data = await getMomoirDetail(id)

    const buttons = document.querySelector(".d-none")
    if (data.userId == localStorage.getItem("userId")) {
        buttons.classList.remove("d-none")
    }

    addCard(data.contents.sections)

    const title = document.querySelector("#title")
    const date = document.querySelector("#date")

    title.innerHTML = data.title
    date.innerHTML = data.date
}

function addCard(sections) {
    const cards = document.querySelector("#wrapper")
    let card = ""
    sections.forEach(element => {
        const subTitle = element["subTitle"]
        const description = element["description"]
        card += `
            <div class="card shadow-sm mb-4">
                <div class="card-body">
                <h5 class="fw-semibold mb-3">${subTitle}</h5>
                <hr />
                <p class="text-body">${description}</p>
                </div>
            </div>
            `
    });
    cards.innerHTML = card
}

const modifyBtn = document.querySelector("#modifyBtn")
modifyBtn.addEventListener("click", getModify)

function getModify() {
    const url = new URL("http://localhost:5500/frontend/Pages/memoir/memoirModify.html")
    const param = url.searchParams

    param.append("id", id)

    window.location.href = url
}

const deleteBtn = document.querySelector("#delete")
deleteBtn.addEventListener("click", deletePost)

async function deletePost(e) {
    await deleteMemoir(id)
    getMemoirs()
}

function getMemoirs() {
    if (confirm('삭제했습니다')) {
        const url = new URL("http://localhost:5500/frontend/Pages/memoir/memoirList.html")
        window.location.href = url
    }
}