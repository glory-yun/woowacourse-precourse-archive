package woowatech.open_mission.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ErrorCode {

    MEMOIR_NOT_FOUND(404, "M001", "해당 회고록을 찾을 수 없습니다."),
    FORBIDDEN(403, "A001", "권한이 없습니다."),
    DUPLICATE_USERNAME(409, "U001", "이미 존재하는 사용자 이름입니다."),
    USERNAME_NOT_FOUND(404, "U002", "존재하지 않는 사용자 이름입니다."),
    INVALID_PASSWORD(401, "U003", "패스워드가 틀립니다.");

    private final int status;
    private final String code;
    private final String message;
}
