import { MemoirSummaryCard } from "../Components/card.js";
import { getMemoirs } from "../API/getMemoirApi.js";
import { redirectToMemoirDetail } from "../util/route.js";

const cardContainer = document.querySelector(".cardContainer")

window.addEventListener("load", getMemoirList)

async function getMemoirList() {
  const memoirDtoData = await getMemoirs();
  makeCard(memoirDtoData);
}

function makeCard(memoirDtoData) {
  const cardsHTML = memoirDtoData.map((data) => MemoirSummaryCard(data)).join("");

  cardContainer.innerHTML = cardsHTML;

  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener("click", getDetail)
  })
}

function getDetail(e) {
  const card = e.target.closest('.card');
  if (card) {
    redirectToMemoirDetail(card.id)
  }
}