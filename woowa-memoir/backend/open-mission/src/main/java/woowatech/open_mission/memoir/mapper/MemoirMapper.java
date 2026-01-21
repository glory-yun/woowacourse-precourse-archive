package woowatech.open_mission.memoir.mapper;

import java.util.stream.Collectors;
import org.springframework.stereotype.Component;
import woowatech.open_mission.memoir.dto.ContentsDto;
import woowatech.open_mission.memoir.dto.MemoirRequestDto;
import woowatech.open_mission.memoir.dto.MemoirResponseDto;
import woowatech.open_mission.memoir.dto.SectionDto;
import woowatech.open_mission.memoir.domain.Contents;
import woowatech.open_mission.memoir.domain.Memoir;
import woowatech.open_mission.memoir.domain.Section;

@Component
public class MemoirMapper {

    public Memoir toEntity(MemoirRequestDto memoirRequestDto) {
        return Memoir.builder()
                .title(memoirRequestDto.title())
                .date(memoirRequestDto.date())
                .contents(toEntity(memoirRequestDto.contents()))
                .build();
    }

    public Contents toEntity(ContentsDto contentsDto) {
        return Contents.builder()
                .sections(contentsDto.sections().stream()
                        .map(sectionDto -> toEntity(sectionDto))
                        .collect(Collectors.toList()))
                .build();
    }

    public Section toEntity(SectionDto sectionDto) {
        return Section.builder()
                .subTitle(sectionDto.subTitle())
                .description(sectionDto.description())
                .build();
    }

    public MemoirResponseDto toDto(Memoir memoir) {
        return MemoirResponseDto.builder()
                .id(memoir.getId())
                .title(memoir.getTitle())
                .date(memoir.getDate())
                .contents(toDto(memoir.getContents()))
                .userId(memoir.getUserId())
                .build();
    }

    public ContentsDto toDto(Contents contents) {
        return ContentsDto.builder()
                .sections(contents.getSections().stream()
                        .map(section -> toDto(section))
                        .collect(Collectors.toList()))
                .build();
    }

    public SectionDto toDto(Section section){
        return SectionDto.builder()
                .subTitle(section.getSubTitle())
                .description(section.getDescription())
                .build();
    }
}
