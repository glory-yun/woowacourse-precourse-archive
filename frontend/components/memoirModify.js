import { putMemoir } from "./getApi.js";

window.addEventListener("load", loadForm)

const url = new URL(window.location.href)
const id = url.searchParams.get("id")

const modifyFrm = document.querySelector("#modifyFrm");
const header = modifyFrm.querySelector("header")
const main = modifyFrm.querySelector("main")
const footer = modifyFrm.querySelector("footer")

const data = JSON.parse(sessionStorage.getItem("post"))

function loadForm() {
    header.innerHTML = `
    <div class="mb-3">
        <label class="form-label">제목</label>
        <input type="text" class="form-control" placeholder="제목을 입력하세요" id="title" value="${data.title}" required>
    </div>
    `

    main.innerHTML = `
    <div id="content">
        <div class="mb-3">
          <label class="form-label">1️⃣ 이번 주에 배운 점</label>
          <textarea class="form-control" rows="3" required>${data.contents.sections[0]["description"]}</textarea>
        </div>
        <div class="mb-3">
          <label class="form-label">2️⃣ 어려웠던 점</label>
          <textarea class="form-control" rows="3" required>${data.contents.sections[1]["description"]}</textarea>
        </div>
        <div class="mb-3">
          <label class="form-label">3️⃣ 다음 주 목표</label>
          <textarea class="form-control" rows="3" required>${data.contents.sections[2]["description"]}</textarea>
        </div>
      </div>
      `

    footer.innerHTML = `
    <div class="text-end border-top pt-4">
        <button type="submit" class="btn btn-primary px-4">수정하기</button>
      </div>
    `
}

modifyFrm.addEventListener("submit", handleSubmit)

async function handleSubmit(event) {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content");
    const contents = content.querySelectorAll(".form-control");

    let memoir = {
        "title": title,
        "date": getDate(),
        "contents": {
            "sections": [
                {
                    "subTitle": "잘한 점",
                    "description": contents[0].value
                },
                {
                    "subTitle": "아쉬운 점",
                    "description": contents[1].value
                },
                {
                    "subTitle": "다음주 목표",
                    "description": contents[2].value
                }
            ]
        }
    }

    await putMemoir(id, memoir)

    getMemoirs();
}

function getMemoirs() {
    if (confirm('수정 됐습니다')) {
        const url = new URL("http://localhost:5500/frontend/components/memoirList.html")
        window.location.href = url
    }
}

function getDate() {
    const today = new Date();

    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    const dateString = year + '-' + month + '-' + day;

    return dateString;
}
