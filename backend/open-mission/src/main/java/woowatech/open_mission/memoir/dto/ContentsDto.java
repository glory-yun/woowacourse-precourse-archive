package woowatech.open_mission.memoir.dto;

import java.util.List;
import lombok.Builder;

@Builder
public record ContentsDto(List<SectionDto> sections) {
}
