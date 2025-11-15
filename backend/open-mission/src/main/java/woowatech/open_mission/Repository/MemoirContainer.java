package woowatech.open_mission.Repository;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import woowatech.open_mission.Domain.Memoir;

@Repository
public interface MemoirContainer extends JpaRepository<Memoir, Long> {
    @Modifying
    @Transactional
    void deleteByIdAndUserId(Long id, Long userId);
    Memoir findByIdAndUserId(Long id, Long userId);
}