package woowatech.open_mission.Domain;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Contents {
    private List<Section> sections;

    public Contents(List<Section> sections) {
        this.sections = sections;
    }
}
