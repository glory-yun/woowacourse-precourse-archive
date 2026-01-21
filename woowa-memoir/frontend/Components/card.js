// Card.js — 카드 HTML만 반환
export function MemoirSummaryCard({ memoirId, title, date, username }) {
  return `
    <div class='card mb-3 p-3 shadow-sm card-hover' id="${memoirId}">
      <h5 class="mb-2">${title}</h5>
      <div class="d-flex justify-content-between align-items-end">
        <time class="text-muted small" datetime="${date}">
          ${date}
        </time>
        <span class="text-muted small">${username}</span>
      </div>
    </div>
  `;
}

export function MemoirDetailCard({ subTitle, description }) {
  return /* html */`
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        <h5 class="fw-semibold mb-3">${subTitle}</h5>
        <hr />
        <p class="text-body">${description}</p>
      </div>
    </div>  
    `
}