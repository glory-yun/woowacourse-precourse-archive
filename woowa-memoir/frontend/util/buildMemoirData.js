import { getDate } from "./getDate.js";
import { collectSections } from "../JS/memoirSectionHandler.js";

export function buildMemoirData() {
  const title = document.querySelector("#title").value;
  const sections = collectSections();

  return {
    title,
    date: getDate(),
    contents: { sections },
  };
}