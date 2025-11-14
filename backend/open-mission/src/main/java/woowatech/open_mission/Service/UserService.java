package woowatech.open_mission.Service;

import org.springframework.stereotype.Service;
import woowatech.open_mission.Domain.User;
import woowatech.open_mission.Repository.UserContainer;

@Service
public class UserService {
    private final UserContainer userContainer;

    public UserService(UserContainer userContainer) {
        this.userContainer = userContainer;
    }

    public void register(User user) {
        if (userContainer.findByUsername(user.getUsername()) != null) {
            throw new IllegalArgumentException("이미 존재하는 사용자 이름입니다.");
        }
        userContainer.save(user);
    }
}
