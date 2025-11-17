import { MemoirSummaryCard } from "./card.js";
import { redirectToMemoirDetail } from "../util/route.js";

export async function getMemoirList(getMyMemoirs) {
  const memoirDtoData = await getMyMemoirs();
  makeCard(memoirDtoData);
}

function makeCard(memoirDtoData) {
  const cardContainer = document.querySelector(".cardContainer")

  const cardsHTML = memoirDtoData.map((data) => MemoirSummaryCard(data)).join("");

  cardContainer.innerHTML = cardsHTML || "작성된 회고가 없습니다.";

  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener("click", getDetail)
  })
}

function getDetail(event) {
  const card = event.target.closest('.card');
  if (card) {
    redirectToMemoirDetail(card.id)
  }
}