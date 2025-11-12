package woowatech.open_mission.Controller;

import org.springframework.web.bind.annotation.*;
import woowatech.open_mission.DTO.MemoirSummaryDto;
import woowatech.open_mission.Domain.Memoir;
import woowatech.open_mission.Service.MemoirService;

import java.util.List;

@RestController
@RequestMapping("/memoir")
public class MemoirController {
    private final MemoirService memoirService;

    public MemoirController(MemoirService memoirService) {
        this.memoirService = memoirService;
    }

    @GetMapping
    public List<MemoirSummaryDto> getMemoirSummary() {
        return memoirService.getMemoirSummary();
    }

    @GetMapping(params = "id")
    public Memoir getMemoir(@RequestParam("id") Long memoirId) {
        return memoirService.getMemoirById(memoirId);
    }

    @PostMapping
    public void saveMemoir(@RequestBody Memoir memoir) {
        memoirService.saveMemoir(memoir);
    }

    @DeleteMapping(params = "id")
    public void deleteMemoir(@RequestParam("id") Long memoirId) {
        memoirService.deleteMemoir(memoirId);
    }

    @PutMapping(params = "id")
    public void updateMemoir(@RequestParam("id") Long memoirId, @RequestBody Memoir updateMemoir) {
        memoirService.updateMemoir(memoirId, updateMemoir);
    }
}
