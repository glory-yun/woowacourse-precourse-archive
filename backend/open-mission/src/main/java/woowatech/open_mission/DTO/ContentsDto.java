package woowatech.open_mission.DTO;

import java.util.List;
import lombok.Builder;

@Builder
public record ContentsDto(List<SectionDto> sections) {
}
