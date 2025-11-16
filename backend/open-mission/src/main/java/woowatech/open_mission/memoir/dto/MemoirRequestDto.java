package woowatech.open_mission.memoir.dto;

import java.util.Date;

public record MemoirRequestDto(String title, Date date, ContentsDto contents) {
}
