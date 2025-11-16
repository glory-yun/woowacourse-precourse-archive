package woowatech.open_mission.Repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import woowatech.open_mission.Domain.User;

@Repository
public interface UserContainer extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    Optional<User> findByUserId(Long userId);
}
