export function MemoirSection() {
  return /* html */`
    <div class="mb-3">
      <div class="d-flex justify-content-between align-items-start">
        <div class="flex-grow-1">
          <input
            type="text"
            class="form-control fw-semibold mb-2 sub-title-input subtitle"
            placeholder="소제목을 입력하세요 (예: 반성할 점)"
            required
          />
          <textarea
            class="form-control description-input description"
            rows="3"
            required></textarea>
        </div>
        <button
          type="button"
          class="btn btn-outline-danger btn-sm ms-2 delete-section-btn">
          삭제
        </button>
      </div>
    </div>
  `;
}