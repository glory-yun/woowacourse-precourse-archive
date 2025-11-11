import { getMomoirDetail } from "./getApi.js"
import { memoirDetail as data } from "./testData.js"

window.addEventListener("load", getDetail)

async function getDetail() {
    const url = new URL(window.location.href)
    const id = url.searchParams.get("id")

    //const data = getMomoirDetail(id)
    //data = JSON.parse(data)

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