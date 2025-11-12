package woowatech.open_mission.Service;

import org.springframework.stereotype.Service;
import woowatech.open_mission.DTO.MemoirSummaryDto;
import woowatech.open_mission.Domain.Memoir;
import woowatech.open_mission.Repository.MemoirContainer;

import java.util.ArrayList;
import java.util.List;

@Service
public class MemoirService {
    private final MemoirContainer memoirContainer;

    public MemoirService(MemoirContainer memoirContainer) {
        this.memoirContainer = memoirContainer;
    }

    public List<MemoirSummaryDto> getMemoirSummary() {
        List<Memoir> memoirList = memoirContainer.findAll();
        List<MemoirSummaryDto> summary = new ArrayList<>();

        for (Memoir memoir : memoirList) {
            summary.add(new MemoirSummaryDto(memoir.getId(), memoir.getTitle(), memoir.getDate()));
        }
        return summary;
    }

    public Memoir getMemoirById(Long memoirId) {
        return memoirContainer.findById(memoirId).orElse(null);
    }

    public void saveMemoir(Memoir memoir) {
        memoirContainer.save(memoir);
    }

    public void deleteMemoir(Long memoirId) {
        memoirContainer.deleteById(memoirId);
    }
}
