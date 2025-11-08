import { getMomoirDetail } from "./getApi.js"

window.addEventListener("load", getDetail)

async function getDetail() {
    const url = new URL(window.location.href)
    const id = url.searchParams.get("id")

    //const data = getMomoirDetail()
    const data =
    {
        "title": "11월 회고",
        "date": "2025-11-08",
        "contents": {
            "section": [
                { "잘한 점": "코드 리뷰 문화를 정착시켰다." },
                { "아쉬운 점": "리팩터링 시간을 확보하지 못했다." },
                { "개선 방안": "리팩터링 전담일을 지정할 것이다." }
            ]

        }
    }
    //data = JSON.parse(data)

    const title = document.querySelector("#title")
    const date = document.querySelector("#date")
    const learnedThisWeek = document.querySelector("#learned-this-week")
    const difficultyThisWeek = document.querySelector("#difficulty-this-week")
    const goalNextWeek = document.querySelector("#goal-next-week")

    title.innerHTML = data.title
    date.innerHTML = data.date
    learnedThisWeek.innerHTML = data.contents.section[0]["잘한 점"]
    difficultyThisWeek.innerHTML = data.contents.section[1]["아쉬운 점"]
    goalNextWeek.innerHTML = data.contents.section[2]["개선 방안"]
}