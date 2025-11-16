package woowatech.open_mission.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public record MemoirSummaryDto(Long memoriId, String title, @JsonFormat(pattern = "yyyy-MM-dd") Date date) {
}
