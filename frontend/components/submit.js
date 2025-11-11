import { postMemoir } from "./getApi.js";

const writeFrm = document.querySelector("#writeFrm");
const header = writeFrm.querySelector("header")
const main = writeFrm.querySelector("main")
const footer = writeFrm.querySelector("footer")

window.addEventListener("load", loadForm)

function loadForm() {
    header.innerHTML = `
    <div class="mb-3">
        <label class="form-label">제목</label>
        <input type="text" class="form-control" placeholder="제목을 입력하세요" id="title" required>
    </div>
    `

    main.innerHTML = `
    <div id="content">
        <div class="mb-3">
          <label class="form-label">1️⃣ 이번 주에 배운 점</label>
          <textarea class="form-control" rows="3" required></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label">2️⃣ 어려웠던 점</label>
          <textarea class="form-control" rows="3" required></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label">3️⃣ 다음 주 목표</label>
          <textarea class="form-control" rows="3" required></textarea>
        </div>
      </div>
      `

    footer.innerHTML = `
    <div class="text-end border-top pt-4">
        <button type="submit" class="btn btn-primary px-4">저장하기</button>
      </div>
    `
}

writeFrm.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
    e.preventDefault();

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
    await postMemoir(memoir)

    getMemoirs()

}

function getMemoirs() {
    if (confirm('저장했습니다')) {
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
