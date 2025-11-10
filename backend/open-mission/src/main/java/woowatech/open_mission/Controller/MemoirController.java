package woowatech.open_mission.Controller;

import org.springframework.web.bind.annotation.*;
import woowatech.open_mission.DTO.MemoirSummaryDto;
import woowatech.open_mission.Domain.Memoir;
import woowatech.open_mission.Service.MemoirService;

import java.util.List;

@RestController
@RequestMapping("/memoir")
public class MemoirController {
    private MemoirService memoirService;

    public MemoirController(MemoirService memoirService) {
        this.memoirService = memoirService;
    }

    //전체 회고 목록 반환 (summary DTO)
    @GetMapping
    public List<MemoirSummaryDto> getMemoirSummary() {
        return memoirService.getMemoirSummary();
    }

    //memoirId에 해당하는 회고록 반환
    @GetMapping("/{memoirId}")
    public Memoir getMemoir(@PathVariable Integer memoirId) {
        return memoirService.getMemoirById(memoirId);
    }

    //Memoir 저장
    @PostMapping
    public void saveMemoir(@RequestBody Memoir memoir) {
        memoirService.saveMemoir(memoir);
    }

    //Memoir 삭제
    @DeleteMapping("/{memoirId}")
    public void deleteMemoir(@PathVariable Integer memoirId) {
        memoirService.deleteMemoir(memoirId);
    }
}
