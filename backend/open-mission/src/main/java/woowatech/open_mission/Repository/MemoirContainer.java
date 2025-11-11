package woowatech.open_mission.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import woowatech.open_mission.Domain.Memoir;

@Repository
public interface MemoirContainer extends JpaRepository<Memoir, Long> {
}