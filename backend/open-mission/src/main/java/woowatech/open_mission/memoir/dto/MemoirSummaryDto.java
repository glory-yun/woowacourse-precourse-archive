package woowatech.open_mission.memoir.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public record MemoirSummaryDto(Long memoirId, String title, @JsonFormat(pattern = "yyyy-MM-dd") Date date, String username) {
}
