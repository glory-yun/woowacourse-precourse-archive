package woowatech.open_mission.Repository;

import jakarta.transaction.Transactional;
import org.hibernate.sql.model.jdbc.MergeOperation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import woowatech.open_mission.Domain.Memoir;

import java.util.Optional;

@Repository
public interface MemoirContainer extends JpaRepository<Memoir, Long> {
    @Modifying
    @Transactional
    void deleteByIdAndUserId(Long id, Long userId);
    Optional<Memoir> findByIdAndUserId(Long id, Long userId);
}