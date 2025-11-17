import { MemoirSection } from "../Components/memoirSection.js";

document.addEventListener("DOMContentLoaded", sectionHandle);

function sectionHandle() {
  // 섹션 추가 버튼 
  const plusBtn = document.querySelector(".plus-btn");
  plusBtn.addEventListener("click", () => {
    content.insertAdjacentHTML("beforeend", MemoirSection());
  });

  //섹션 삭제 버튼
  const content = document.querySelector("#content");
  content.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-section-btn")) {
      e.target.closest(".mb-3").remove();
    }
  });
}

export function collectSections() {
  const content = document.querySelector("#content");
  const subtitles = content.querySelectorAll(".subtitle");
  const descriptions = content.querySelectorAll(".description");

  return Array.from(subtitles).map((sub, idx) => ({
    subTitle: sub.tagName === "LABEL" ? sub.innerText : sub.value,
    description: descriptions[idx].value,
  }));
}