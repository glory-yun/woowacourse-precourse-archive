package woowatech.open_mission.user.mapper;

import org.springframework.stereotype.Component;
import woowatech.open_mission.user.domain.User;
import woowatech.open_mission.user.dto.LoginResponseDto;
import woowatech.open_mission.user.dto.UserRequestDto;

@Component
public class UserMapper {

    public User toEntity(UserRequestDto userRequestDto) {
        return User.builder()
                .username(userRequestDto.username())
                .password(userRequestDto.password())
                .email(userRequestDto.email())
                .build();
    }

    public LoginResponseDto toDto(User user) {
        return LoginResponseDto.builder()
                .userId(user.getUserId())
                .username(user.getUsername())
                .build();
    }
}
