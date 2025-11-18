package woowatech.open_mission.user.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import woowatech.open_mission.user.dto.LoginRequestDto;
import woowatech.open_mission.user.dto.LoginResponseDto;
import woowatech.open_mission.user.dto.UserRequestDto;
import woowatech.open_mission.user.service.UserService;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    //회원가입
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody UserRequestDto user) {
        userService.register(user);
        return ResponseEntity.ok("회원가입이 완료되었습니다.");
    }

    //로그인
    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody LoginRequestDto loginRequestDto) {
        LoginResponseDto loginResponseDto = userService.login(loginRequestDto);
        return ResponseEntity.ok(loginResponseDto);
    }
}
