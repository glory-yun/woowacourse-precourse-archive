package woowatech.open_mission.Domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Memoir {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "contents_id", nullable = false)
    private Contents contents;
}
