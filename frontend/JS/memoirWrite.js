import { saveMemoir } from "../API/getMemoirApi.js";
import { getDate } from "../util/getDate.js";
import { collectSections } from "./memoirSectionHandler.js";
import { redirectToMemoirDetailAfterSave } from "../util/route.js";

const writeFrm = document.querySelector("#writeFrm");
writeFrm.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const sections = collectSections();

  const memoir = {
    title: title,
    date: getDate(),
    contents: { sections: sections }
  };

  await saveMemoir(memoir);
  alert("저장했습니다");
  redirectToMemoirDetailAfterSave();
}
