package woowatech.open_mission.Service;

import static woowatech.open_mission.exception.ErrorCode.DUPLICATE_USERNAME;
import static woowatech.open_mission.exception.ErrorCode.INVALID_PASSWORD;
import static woowatech.open_mission.exception.ErrorCode.USERNAME_NOT_FOUND;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import woowatech.open_mission.DTO.LoginRequestDto;
import woowatech.open_mission.DTO.LoginResponseDto;
import woowatech.open_mission.Domain.User;
import woowatech.open_mission.Repository.UserContainer;
import woowatech.open_mission.exception.CustomException;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserContainer userContainer;

    public void register(User user) {
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

        return new LoginResponseDto(user.getUserId(), user.getUsername());
    }
}
