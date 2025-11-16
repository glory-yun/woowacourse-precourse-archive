package woowatech.open_mission.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import woowatech.open_mission.DTO.MemoirSummaryDto;
import woowatech.open_mission.Domain.Memoir;
import woowatech.open_mission.Domain.User;
import woowatech.open_mission.Repository.MemoirContainer;
import woowatech.open_mission.Repository.UserContainer;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemoirService {
    private final MemoirContainer memoirContainer;
    private final UserContainer userContainer;

    //summary를 추출하는 함수
    private List<MemoirSummaryDto> getSummaries(List<Memoir> memoirList) {
        List<MemoirSummaryDto> summary = new ArrayList<>();

        for (Memoir memoir : memoirList) {
            User user = userContainer.findByUserId(memoir.getUserId());
            summary.add(new MemoirSummaryDto(memoir.getId(), memoir.getTitle(), memoir.getDate(), user.getUsername()));
        }
        return summary;
    }


    public List<MemoirSummaryDto> getMemoirSummary() {
        List<Memoir> memoirList = memoirContainer.findAll();
        return getSummaries(memoirList);
    }

    public List<MemoirSummaryDto> getMemoirsByUserId(Long userId) {
        List<Memoir> memoirList = memoirContainer.findAllByUserId(userId);
        return getSummaries(memoirList);
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
