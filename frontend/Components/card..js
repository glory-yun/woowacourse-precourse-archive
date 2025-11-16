// Card.js — 카드 HTML만 반환
export function Card({ memoriId, title, date, username }) {
  return `
    <div class='card mb-3 p-3 shadow-sm card-hover' id="${memoriId}">
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