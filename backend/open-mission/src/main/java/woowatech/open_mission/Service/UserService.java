package woowatech.open_mission.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import woowatech.open_mission.DTO.LoginRequestDto;
import woowatech.open_mission.DTO.LoginResponseDto;
import woowatech.open_mission.Domain.User;
import woowatech.open_mission.Repository.UserContainer;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserContainer userContainer;

    public void register(User user) {
        if (userContainer.findByUsername(user.getUsername()) != null) {
            throw new IllegalArgumentException("이미 존재하는 사용자 이름입니다.");
        }
        userContainer.save(user);
    }

    public LoginResponseDto login(LoginRequestDto loginRequestDto) {
        String username = loginRequestDto.username();
        String password = loginRequestDto.password();
        User user = userContainer.findByUsername(username);

        if(user == null){
            throw new IllegalArgumentException("존재하지 않는 사용자입니다.");
        }
        if(!user.getPassword().equals(password)){
            throw new IllegalArgumentException("비밀번호가 일치하지 않습니다.");
        }

        return new LoginResponseDto(user.getUserId(), user.getUsername());
    }
}
