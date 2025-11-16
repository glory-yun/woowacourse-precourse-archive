package woowatech.open_mission.Repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import woowatech.open_mission.Domain.User;

public interface UserContainer extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    Optional<User> findByUserId(Long userId);
}
