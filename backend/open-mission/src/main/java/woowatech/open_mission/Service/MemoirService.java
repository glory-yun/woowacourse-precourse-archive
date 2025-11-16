package woowatech.open_mission.Service;

import static woowatech.open_mission.exception.ErrorCode.FORBIDDEN;
import static woowatech.open_mission.exception.ErrorCode.MEMOIR_NOT_FOUND;
import static woowatech.open_mission.exception.ErrorCode.USERNAME_NOT_FOUND;

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
import woowatech.open_mission.exception.CustomException;

@Service
@RequiredArgsConstructor
public class MemoirService {
    private final MemoirContainer memoirContainer;
    private final UserContainer userContainer;

    //summary를 추출하는 함수
    private List<MemoirSummaryDto> getSummaries(List<Memoir> memoirList) {
        List<MemoirSummaryDto> summary = new ArrayList<>();

        for (Memoir memoir : memoirList) {
            User user = userContainer.findByUserId(memoir.getUserId()).orElseThrow(
                    () -> new CustomException(USERNAME_NOT_FOUND));
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
        return memoir.orElseThrow(() -> new CustomException(MEMOIR_NOT_FOUND));
    }

    public void saveMemoir(Memoir memoir, Long userId) {
        memoir.setUserId(userId);
        memoirContainer.save(memoir);
    }

    public void deleteMemoir(Long memoirId, Long userId) {
        Optional<Memoir> memoirOpt = memoirContainer.findByIdAndUserId(memoirId, userId);
        Memoir memoir = memoirOpt.orElseThrow(() ->
                new CustomException(FORBIDDEN));

        memoirContainer.delete(memoir);
    }

    public void updateMemoir(Long memoirId, Long userId, Memoir updateMemoir) {
        Optional<Memoir> memoirOpt = memoirContainer.findByIdAndUserId(memoirId, userId);
        Memoir memoir = memoirOpt.orElseThrow(() ->
                new CustomException(FORBIDDEN));

        memoir.setTitle(updateMemoir.getTitle());
        memoir.setDate(updateMemoir.getDate());
        memoir.setContents(updateMemoir.getContents());

        memoirContainer.save(memoir);
    }


}
