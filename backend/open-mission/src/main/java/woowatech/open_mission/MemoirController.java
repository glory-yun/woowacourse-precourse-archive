package woowatech.open_mission;

import woowatech.open_mission.DTO.MemoirSummaryDto;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class MemoirController {
    private MemoirContainer memoirContainer;

    public MemoirController() {
        memoirContainer = new MemoirContainer();
    }

    //Memoir summary Dto 생성
    public List<MemoirSummaryDto> getMemoirSummary() {
        Map<Integer, Memoir> memoirMap = memoirContainer.getMemoirMap();
        List<MemoirSummaryDto> summary = new ArrayList<>();

        for (Map.Entry<Integer, Memoir> entry : memoirMap.entrySet()) {
            Memoir memoir = entry.getValue();
            summary.add(new MemoirSummaryDto(entry.getKey(), memoir.getTitle(), memoir.getDate()));
        }
        return summary;
    }

    //memoirId에 해당하는 회고록 반환
    public Memoir getMemoirById(Integer memoirId) {
        Map<Integer, Memoir> memoirMap = memoirContainer.getMemoirMap();
        Memoir memoirById = memoirMap.get(memoirId);
        return memoirById;
    }

    //회고록 저장 요청이 들어오면 memoirContainer에 저장
    public void saveMemoir(Memoir memoir) {
        memoirContainer.saveMemoir(memoir);
    }

    //회고록 삭제 요청이 들어오면 memoirContainer에서 삭제
    public void deleteMemoir(Integer memoirId) {
        memoirContainer.removeMemoir(memoirId);
    }
}
