package woowatech.open_mission.Service;

import org.springframework.stereotype.Service;
import woowatech.open_mission.DTO.MemoirSummaryDto;
import woowatech.open_mission.Domain.Memoir;
import woowatech.open_mission.Repository.MemoirContainer;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class MemoirService {
    private  MemoirContainer memoirContainer;

    public MemoirService(MemoirContainer memoirContainer) {
        this.memoirContainer = memoirContainer;
    }

    //Memoir summary Dto 반환
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

    // 회고록 저장
    public void saveMemoir(Memoir memoir) {
        memoirContainer.saveMemoir(memoir);
    }

    // 회고록 삭제
    public void deleteMemoir(Integer memoirId) {
        memoirContainer.removeMemoir(memoirId);
    }
}
