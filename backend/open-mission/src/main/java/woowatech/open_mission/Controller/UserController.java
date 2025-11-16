package woowatech.open_mission.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import woowatech.open_mission.DTO.LoginRequestDto;
import woowatech.open_mission.DTO.LoginResponseDto;
import woowatech.open_mission.Domain.User;
import woowatech.open_mission.Service.UserService;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    //회원가입
    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody User user) {
        try {
            userService.register(user);
            return ResponseEntity.ok("회원가입이 완료되었습니다.");  //200 OK
        } catch (IllegalArgumentException error) {
            return ResponseEntity.badRequest().body(error.getMessage()); //400 Bad Request
        } catch (Exception error) {
            return ResponseEntity.internalServerError().body("서버 오류가 발생했습니다."); //500 Error
        }
    }

    //로그인
    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody LoginRequestDto loginRequestDto) {
        try {
            LoginResponseDto loginResponseDto = userService.login(loginRequestDto);
            return ResponseEntity.ok(loginResponseDto);
        } catch (IllegalArgumentException error) {
            return ResponseEntity.badRequest().body(error.getMessage()); //400 Bad Request
        } catch (Exception error) {
            return ResponseEntity.internalServerError().body("서버 오류가 발생했습니다."); //500 Error
        }
    }
}
