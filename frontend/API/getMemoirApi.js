import { MEMOIR_API_URL } from "../config.js";
const memoirUrl = MEMOIR_API_URL;

export async function getMemoirs() {
  const response = await fetch(memoirUrl);
  const memoirs = await response.json();
  return memoirs;
}

export async function getMyMemoirs() {
  const response = await
    fetch(memoirUrl + "/mymemoir", {
      headers: {
        'user-id': localStorage.getItem("userId")
      }
    })
  const memoirs = await response.json();
  return memoirs;
}

export async function getMomoirDetail() {
  const nowUrl = new URL(window.location.href)
  const id = nowUrl.searchParams.get("id")
  const urlParams = memoirUrl.searchParams;
  urlParams.append("id", id)

  const response = await fetch(memoirUrl);
  const memoir = await response.json();
  sessionStorage.setItem("memoir", JSON.stringify(memoir))
  return memoir;
}

export async function saveMemoir(memoir) {
  const response = await fetch(memoirUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "user-id": localStorage.getItem("userId"),
    },
    body: JSON.stringify(memoir),
  });

  if (!response.ok) {
    alert(`저장에 실패했습니다.`);
    throw new Error(`saveMemoir failed`);
  }
}

export async function putMemoir(id, memoir) {
  let urlParams = memoirUrl.searchParams
  urlParams.append("id", id)

  await fetch(memoirUrl, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
      'user-id': localStorage.getItem("userId")
    },
    body: JSON.stringify(memoir)
  });
}

export async function deleteMemoir(id) {
  let urlParams = memoirUrl.searchParams
  urlParams.append("id", id)

  await fetch(memoirUrl, {
    method: "DELETE",
    headers: {
      'user-id': localStorage.getItem("userId")
    }
  });
}