package woowatech.open_mission.memoir.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import lombok.Builder;

@Builder
public record MemoirResponseDto(Long id, String title, @JsonFormat(pattern = "yyyy-MM-dd") Date date, ContentsDto contents, Long userId) {
}
