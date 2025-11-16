package woowatech.open_mission.Controller;

import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<?> getMemoirSummary() {
        try {
            List<MemoirSummaryDto> summary = memoirService.getMemoirSummary();
            return ResponseEntity.ok(summary);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("회고록 목록 조회 중 오류가 발생했습니다.");
        }
    }

    @GetMapping(params = "id")
    public ResponseEntity<?> getMemoir(@RequestParam("id") Long memoirId) {
        try {
            Memoir memoir = memoirService.getMemoirById(memoirId);
            return ResponseEntity.ok(memoir);
        } catch (IllegalArgumentException error) {
            return ResponseEntity.badRequest().body(error.getMessage());
        } catch (Exception error) {
            return ResponseEntity.internalServerError().body("회고록 조회 중 오류가 발생했습니다.");
        }
    }


    @PostMapping
    public ResponseEntity<?> saveMemoir(@RequestBody Memoir memoir, @RequestHeader("user-id") Long userId) {
        try {
            memoirService.saveMemoir(memoir, userId);
            return ResponseEntity.ok("회고록이 성공적으로 저장되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("회고록 저장 중 오류가 발생했습니다.");
        }
    }

    @DeleteMapping(params = "id")
    public ResponseEntity<?> deleteMemoir(@RequestParam("id") Long memoirId,
                                          @RequestHeader("user-id") Long userId) {
        try {
            memoirService.deleteMemoir(memoirId, userId);
            return ResponseEntity.ok("회고록이 성공적으로 삭제되었습니다.");
        } catch (IllegalArgumentException error) {
            return ResponseEntity.badRequest().body(error.getMessage());
        } catch (Exception error) {
            return ResponseEntity.internalServerError().body("회고록 삭제 중 오류가 발생했습니다.");
        }
    }

    @PutMapping(params = "id")
    public ResponseEntity<?> updateMemoir(@RequestParam("id") Long memoirId,
                                          @RequestHeader("user-id") Long userId,
                                          @RequestBody Memoir updateMemoir) {
        try {
            memoirService.updateMemoir(memoirId, userId, updateMemoir);
            return ResponseEntity.ok("회고록이 성공적으로 수정되었습니다.");
        } catch (IllegalArgumentException error) {
            return ResponseEntity.badRequest().body(error.getMessage());
        } catch (Exception error) {
            return ResponseEntity.internalServerError().body("회고록 수정 중 오류가 발생했습니다.");
        }
    }

    @GetMapping("/mymemoir")
    public ResponseEntity<?> getMyMemoirs(@RequestHeader("user-id") Long userId) {
        try {
            List<MemoirSummaryDto> myMemoirs = memoirService.getMemoirsByUserId(userId);
            return ResponseEntity.ok(myMemoirs);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("내 회고록 조회 중 오류가 발생했습니다.");
        }
    }
}
