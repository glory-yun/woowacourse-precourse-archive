package woowatech.open_mission.Domain;

import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
public class Section {
    Map<String, String> section;

    public Section(Map<String, String> section) {
        this.section = section;
    }
}