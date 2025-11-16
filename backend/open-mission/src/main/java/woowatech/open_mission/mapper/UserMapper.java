package woowatech.open_mission.mapper;

import org.springframework.stereotype.Component;
import woowatech.open_mission.DTO.LoginResponseDto;
import woowatech.open_mission.DTO.UserRequestDto;
import woowatech.open_mission.Domain.User;

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
