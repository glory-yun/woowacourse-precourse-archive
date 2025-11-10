package woowatech.open_mission.Controller;

import org.springframework.web.bind.annotation.RestController;
import woowatech.open_mission.DTO.MemoirSummaryDto;
import woowatech.open_mission.Domain.Memoir;
import woowatech.open_mission.Repository.MemoirContainer;
import woowatech.open_mission.Service.MemoirService;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class MemoirController {
    private MemoirService memoirService;

    public MemoirController(MemoirService memoirService) {
        this.memoirService = memoirService;
    }

    //memoirId에 해당하는 회고록 반환
    //전체 회고 목록 반환 (summary DTO)
    //Memoir 저장
    //Memoir 삭제
    //Memoir 수정
}
