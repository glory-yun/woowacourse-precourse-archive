package woowatech.open_mission.user.dto;

import lombok.Builder;

@Builder
public record LoginResponseDto (Long userId, String username){}
