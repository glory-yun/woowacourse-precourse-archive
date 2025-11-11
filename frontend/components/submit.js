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

function handleSubmit(e) {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content");
    const contents = content.querySelector(".form-control");

    const form = document.createElement("form");
    const url = "http://localhost:8080"
    form.setAttribute('method', 'post');
    form.setAttribute('action', url);

    const data = document.createElement('input');
    data.setAttribute("title", title);
    data.setAttribute("contents", contents);

    form.appendChild(data);
    form.submit();
}
