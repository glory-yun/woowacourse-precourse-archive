package woowatech.open_mission.DTO;

import lombok.Builder;

@Builder
public record LoginResponseDto (Long userId, String username){}
