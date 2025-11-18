package woowatech.open_mission.memoir.service;

import static woowatech.open_mission.global.exception.ErrorCode.FORBIDDEN;
import static woowatech.open_mission.global.exception.ErrorCode.MEMOIR_NOT_FOUND;
import static woowatech.open_mission.global.exception.ErrorCode.USERNAME_NOT_FOUND;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import woowatech.open_mission.memoir.dto.MemoirRequestDto;
import woowatech.open_mission.memoir.dto.MemoirResponseDto;
import woowatech.open_mission.memoir.dto.MemoirSummaryDto;
import woowatech.open_mission.memoir.domain.Memoir;
import woowatech.open_mission.user.domain.User;
import woowatech.open_mission.memoir.repository.MemoirContainer;
import woowatech.open_mission.user.repository.UserContainer;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import woowatech.open_mission.global.exception.CustomException;
import woowatech.open_mission.memoir.mapper.MemoirMapper;

@Service
@RequiredArgsConstructor
public class MemoirService {
    private final MemoirContainer memoirContainer;
    private final UserContainer userContainer;
    private final MemoirMapper memoirMapper;

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

    public MemoirResponseDto getMemoirById(Long memoirId) {
        Memoir memoir = memoirContainer.findById(memoirId).orElseThrow(() ->
                new CustomException(MEMOIR_NOT_FOUND));
        return memoirMapper.toDto(memoir);
    }

    public void saveMemoir(MemoirRequestDto memoirRequestDto, Long userId) {
        Memoir memoir = memoirMapper.toEntity(memoirRequestDto);
        memoir.setUserId(userId);
        memoirContainer.save(memoir);
    }

    public void deleteMemoir(Long memoirId, Long userId) {
        Optional<Memoir> memoirOpt = memoirContainer.findByIdAndUserId(memoirId, userId);
        Memoir memoir = memoirOpt.orElseThrow(() ->
                new CustomException(FORBIDDEN));

        memoirContainer.delete(memoir);
    }

    @Transactional
    public void updateMemoir(Long memoirId, Long userId, MemoirRequestDto updateMemoir) {
        Memoir memoir = memoirContainer.findByIdAndUserId(memoirId, userId).orElseThrow(() ->
                new CustomException(FORBIDDEN));

        memoir.updateMemoir(updateMemoir.title(),
                            updateMemoir.date(),
                            memoirMapper.toEntity(updateMemoir.contents()));
    }
}
