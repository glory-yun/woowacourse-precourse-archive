package woowatech.open_mission.user.service;

import static woowatech.open_mission.global.exception.ErrorCode.DUPLICATE_USERNAME;
import static woowatech.open_mission.global.exception.ErrorCode.INVALID_PASSWORD;
import static woowatech.open_mission.global.exception.ErrorCode.USERNAME_NOT_FOUND;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import woowatech.open_mission.global.exception.CustomException;
import woowatech.open_mission.user.domain.User;
import woowatech.open_mission.user.dto.LoginRequestDto;
import woowatech.open_mission.user.dto.LoginResponseDto;
import woowatech.open_mission.user.dto.UserRequestDto;
import woowatech.open_mission.user.mapper.UserMapper;
import woowatech.open_mission.user.repository.UserContainer;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserContainer userContainer;
    private final UserMapper userMapper;

    public void register(UserRequestDto userRequestDto) {
        User user = userMapper.toEntity(userRequestDto);
        if (!userContainer.findByUsername(user.getUsername()).isEmpty()) {
            throw new CustomException(DUPLICATE_USERNAME);
        }
        userContainer.save(user);
    }

    public LoginResponseDto login(LoginRequestDto loginRequestDto) {
        String username = loginRequestDto.username();
        String password = loginRequestDto.password();
        User user = userContainer.findByUsername(username)
                .orElseThrow(() -> new CustomException(USERNAME_NOT_FOUND));

        if(!user.getPassword().equals(password)){
            throw new CustomException(INVALID_PASSWORD);
        }

        return userMapper.toDto(user);
    }
}
