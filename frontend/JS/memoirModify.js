import { putMemoir } from "../API/getMemoirApi.js";
import { redirectToMemoirDetail } from "../util/route.js";
import { loadMemoirForm } from "./loadMemoirForm.js";
import { buildMemoirData } from "../util/buildMemoirData.js";

//Form Load
window.addEventListener("load", loadMemoirForm);

//Form Submit
const modifyFrm = document.querySelector("#modifyFrm");
modifyFrm.addEventListener("submit", handleSubmit)

async function handleSubmit(event) {
  event.preventDefault();

  const requestMemoirData = buildMemoirData();

  const memoirId = new URL(window.location.href).searchParams.get("id")
  await putMemoir(memoirId, requestMemoirData);
  alert("수정이 완료됐습니다.");
  redirectToMemoirDetail(memoirId);
}