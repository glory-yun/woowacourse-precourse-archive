package woowatech.open_mission.Service;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import woowatech.open_mission.DTO.MemoirSummaryDto;
import woowatech.open_mission.Domain.Memoir;
import woowatech.open_mission.Repository.MemoirContainer;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
        Optional<Memoir> memoir = memoirContainer.findById(memoirId);
        return memoir.orElseThrow(() -> new IllegalArgumentException("해당 회고록을 찾을 수 없습니다."));
    }

    public void saveMemoir(Memoir memoir, Long userId) {
        memoir.setUserId(userId);
        memoirContainer.save(memoir);
    }

    public void deleteMemoir(Long memoirId, Long userId) {
        Optional<Memoir> memoirOpt = memoirContainer.findByIdAndUserId(memoirId, userId);
        Memoir memoir = memoirOpt.orElseThrow(() ->
                new IllegalArgumentException("삭제할  권한이 없습니다."));

        memoirContainer.delete(memoir);
    }

    public void updateMemoir(Long memoirId, Long userId, Memoir updateMemoir) {
        Optional<Memoir> memoirOpt = memoirContainer.findByIdAndUserId(memoirId, userId);
        Memoir memoir = memoirOpt.orElseThrow(() ->
                new IllegalArgumentException("수정할 권한이 없습니다."));

        memoir.setTitle(updateMemoir.getTitle());
        memoir.setDate(updateMemoir.getDate());
        memoir.setContents(updateMemoir.getContents());

        memoirContainer.save(memoir);
    }
}
