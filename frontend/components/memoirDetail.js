import { getMomoirDetail } from "./getApi.js"
import { deleteMemoir } from "./getApi.js"
// import { memoirDetail as data } from "./testData.js"

window.addEventListener("load", getDetail)

const url = new URL(window.location.href)
const id = url.searchParams.get("id")

async function getDetail() {
    const data = await getMomoirDetail(id)

    const title = document.querySelector("#title")
    const date = document.querySelector("#date")
    const learnedThisWeek = document.querySelector("#learned-this-week")
    const difficultyThisWeek = document.querySelector("#difficulty-this-week")
    const goalNextWeek = document.querySelector("#goal-next-week")

    title.innerHTML = data.title
    date.innerHTML = data.date
    learnedThisWeek.innerHTML = data.contents.sections[0]["description"]
    difficultyThisWeek.innerHTML = data.contents.sections[1]["description"]
    goalNextWeek.innerHTML = data.contents.sections[2]["description"]
}

const modifyBtn = document.querySelector("#modifyBtn")
modifyBtn.addEventListener("click", getModify)

function getModify() {
    const url = new URL("http://localhost:5500/frontend/components/memoirModify.html")
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
        const url = new URL("http://localhost:5500/frontend/components/memoirList.html")
        window.location.href = url
    }
}