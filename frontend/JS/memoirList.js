import { getMemoirs } from "../API/getMemoirApi.js";
import { getMemoirList } from "../Components/memoirListTemplate.js";

window.addEventListener("load", () => {
  getMemoirList(getMemoirs);
})
