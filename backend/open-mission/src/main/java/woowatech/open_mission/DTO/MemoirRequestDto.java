package woowatech.open_mission.DTO;

import java.util.Date;

public record MemoirRequestDto(String title, Date date, ContentsDto contents) {
}
