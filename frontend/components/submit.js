import { postMemoir } from "./getMemoirApi.js";

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
          <label class="form-label subtitle">이번 주에 배운 점</label>
          <textarea class="form-control description" rows="3" required></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label subtitle">어려웠던 점</label>
          <textarea class="form-control description" rows="3" required></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label subtitle">다음 주 목표</label>
          <textarea class="form-control description" rows="3" required></textarea>
        </div>
      </div>
      `

    footer.innerHTML = `
    <div class="d-flex justify-content-end align-items-center gap-3 border-top pt-4">
        <button 
            type="button" 
            class="btn bg-white border rounded-circle shadow-sm d-flex justify-content-center align-items-center plus-btn"
            style="width: 38px; height: 38px; font-size: 22px; font-weight: 600;">
                ✚
        </button>
        <button type="submit" class="btn btn-primary px-4">
            저장하기
        </button>
    </div>
    `

    const plusBtn = document.querySelector(".plus-btn");
    plusBtn.addEventListener("click", 함수이름미정);
}

function 함수이름미정() {
    const content = document.querySelector("#content");

    const wrapper = document.createElement("div");
    wrapper.className = "mb-3";

    wrapper.innerHTML = `
        <div class="d-flex justify-content-between align-items-start">
            <div class="flex-grow-1">
                <input 
                    type="text" 
                    class="form-control fw-semibold mb-2 sub-title-input subtitle" 
                    placeholder="소제목을 입력하세요 (예: 반성할 점)" 
                    required
                />
                <textarea 
                    class="form-control description-input description" 
                    rows="3" 
                    required>
                </textarea>
            </div>
            <button 
                type="button" 
                class="btn btn-outline-danger btn-sm ms-2 delete-section-btn">
                삭제
            </button>
        </div>
    `;
    content.appendChild(wrapper);

    content.addEventListener("click", deleteSub)
}

function deleteSub(e) {
    if (e.target.classList.contains("delete-section-btn")) {
        e.target.closest(".mb-3").remove();
    }
}

writeFrm.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content");

    const subtitles = content.querySelectorAll(".subtitle");
    const descriptions = content.querySelectorAll(".description");

    const sections = Array.from(subtitles).map((sub, idx) => {
        const subTitle = sub.tagName === "LABEL" ? sub.innerText : sub.value;
        const description = descriptions[idx].value;

        return { subTitle, description };
    });

    let memoir = {
        "title": title,
        "date": getDate(),
        "contents": {
            "sections": sections
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
