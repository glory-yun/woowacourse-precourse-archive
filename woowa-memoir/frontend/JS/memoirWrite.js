import { saveMemoir } from "../API/getMemoirApi.js";
import { redirectToMemoirDetailAfterSave } from "../util/route.js";
import { buildMemoirData } from "../util/buildMemoirData.js";

const writeFrm = document.querySelector("#writeFrm");
writeFrm.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const requestMemoirData = buildMemoirData();

  await saveMemoir(requestMemoirData);
  alert("저장했습니다");
  redirectToMemoirDetailAfterSave();
}
