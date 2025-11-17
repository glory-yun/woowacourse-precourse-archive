import { getMomoirDetail } from "../API/getMemoirApi.js"
import { MemoirDetailCard } from "../Components/card.js";
import { buttonSetting } from "./buttonSetting.js";

window.addEventListener("load", showMemoirDetail)

async function showMemoirDetail() {
  const memoirData = await getMomoirDetail();

  buttonSetting(memoirData.id, memoirData.userId);
  showHeaders(memoirData);
  showCards(memoirData.contents.sections)
}

function showCards(sections) {
  const wrapper = document.querySelector("#wrapper");
  const cardsHTML = sections.map(MemoirDetailCard).join("");
  wrapper.innerHTML = cardsHTML;
}

function showHeaders(data) {
  document.querySelector("#title").textContent = data.title;
  document.querySelector("#date").textContent = data.date;
}