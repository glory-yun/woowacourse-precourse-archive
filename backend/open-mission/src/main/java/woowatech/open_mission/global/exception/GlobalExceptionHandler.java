package woowatech.open_mission.global.exception;

import jakarta.servlet.http.HttpServletRequest;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(CustomException.class)
    public ResponseEntity<ErrorResponse> globalException(CustomException e) {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        ErrorResponse response = ErrorResponse.builder()
                .timeStamp(ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime())
                .status(e.getErrorCode().getStatus())
                .error(e.getErrorCode().getCode())
                .message(e.getMessage())
                .path(request.getRequestURI())
                .build();
        return ResponseEntity.status(e.getErrorCode().getStatus()).body(response);
    }
}
