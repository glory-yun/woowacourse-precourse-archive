import { getMomoirDetail } from "./getApi.js"

window.addEventListener("load", getDetail)

async function getDetail() {
    const url = new URL(window.location.href)
    const id = url.searchParams.get("id")

    //const data = getMomoirDetail(id)
    const data =
    {
        "title": "11월 회고",
        "date": "2025-11-11",
        "contents": {
            "sections": [
                {
                    "subTitle": "잘한 점",
                    "description": "계획한 기능들을 모두 완성함"
                },
                {
                    "subTitle": "아쉬운 점",
                    "description": "테스트 코드 커버리지가 낮았음"
                },
                {
                    "subTitle": "다음주 목표",
                    "description": "테스트 코드 커버리지가 낮았음"
                }
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
    learnedThisWeek.innerHTML = data.contents.sections[0]["description"]
    difficultyThisWeek.innerHTML = data.contents.sections[1]["description"]
    goalNextWeek.innerHTML = data.contents.sections[2]["description"]
}