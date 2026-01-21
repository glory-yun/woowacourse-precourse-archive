import { redirectToMemoirModify, redirectToMemoirList } from "../util/route.js";
import { deleteMemoir } from "../API/getMemoirApi.js";

export function buttonSetting(memoirId, userId) {
  const currentUser = localStorage.getItem("userId");

  if (userId == currentUser) {
    const buttons = document.querySelector(".d-none")
    buttons.classList.remove("d-none");

    const modifyBtn = document.querySelector("#modifyBtn");
    const deleteBtn = document.querySelector("#delete");

    modifyBtn.addEventListener("click", () => handleModify(memoirId));
    deleteBtn.addEventListener("click", () => handleDelete(memoirId));
  }
}

function handleModify(memoirId) {
  redirectToMemoirModify(memoirId);
}

async function handleDelete(memoirId) {
  await deleteMemoir(memoirId);
  alert("삭제되었습니다.");
  redirectToMemoirList();
}