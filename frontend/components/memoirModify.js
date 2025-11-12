window.addEventListener("load", loadForm)

const writeFrm = document.querySelector("#modifyFrm");
const header = writeFrm.querySelector("header")
const main = writeFrm.querySelector("main")
const footer = writeFrm.querySelector("footer")

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