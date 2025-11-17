import { MemoirSection } from "../Components/memoirSection.js";

export function loadMemoirForm() {
  const memoirData = JSON.parse(sessionStorage.getItem("memoir"));

  document.querySelector("#title").value = memoirData.title;
  const sections = memoirData.contents.sections
  const content = document.querySelector("#content");

  const baseDescriptions = content.querySelectorAll(".description");
  const baseSection = sections.slice(0, 3);
  baseSection.forEach((section, index) => {
    baseDescriptions[index].value = section.description;
  });

  const addSection = sections.slice(3);
  addSection.forEach(({ subTitle, description }) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = MemoirSection();

    wrapper.querySelector(".subtitle").value = subTitle;
    wrapper.querySelector(".description").value = description;

    content.appendChild(wrapper);
  });
}