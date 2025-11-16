package woowatech.open_mission.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import woowatech.open_mission.DTO.MemoirRequestDto;
import woowatech.open_mission.DTO.MemoirResponseDto;
import woowatech.open_mission.DTO.MemoirSummaryDto;
import woowatech.open_mission.Service.MemoirService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/memoir")
public class MemoirController {
    private final MemoirService memoirService;

    @GetMapping
    public ResponseEntity<?> getMemoirSummary() {
        List<MemoirSummaryDto> summary = memoirService.getMemoirSummary();
        return ResponseEntity.ok(summary);
    }

    @GetMapping(params = "id")
    public ResponseEntity<?> getMemoir(@RequestParam("id") Long memoirId) {
        MemoirResponseDto memoir = memoirService.getMemoirById(memoirId);
        return ResponseEntity.ok(memoir);
    }


    @PostMapping
    public ResponseEntity<?> saveMemoir(@RequestBody MemoirRequestDto memoir,
                                        @RequestHeader("user-id") Long userId) {
        memoirService.saveMemoir(memoir, userId);
        return ResponseEntity.ok("회고록이 성공적으로 저장되었습니다.");
    }

    @DeleteMapping(params = "id")
    public ResponseEntity<?> deleteMemoir(@RequestParam("id") Long memoirId,
                                          @RequestHeader("user-id") Long userId) {
        memoirService.deleteMemoir(memoirId, userId);
        return ResponseEntity.ok("회고록이 성공적으로 삭제되었습니다.");

    }

    @PutMapping(params = "id")
    public ResponseEntity<?> updateMemoir(@RequestParam("id") Long memoirId,
                                          @RequestHeader("user-id") Long userId,
                                          @RequestBody MemoirRequestDto updateMemoir) {
        memoirService.updateMemoir(memoirId, userId, updateMemoir);
        return ResponseEntity.ok("회고록이 성공적으로 수정되었습니다.");
    }

    @GetMapping("/mymemoir")
    public ResponseEntity<?> getMyMemoirs(@RequestHeader("user-id") Long userId) {
        List<MemoirSummaryDto> myMemoirs = memoirService.getMemoirsByUserId(userId);
        return ResponseEntity.ok(myMemoirs);
    }
}
