package woowatech.open_mission.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import woowatech.open_mission.Domain.User;

public interface UserContainer extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
