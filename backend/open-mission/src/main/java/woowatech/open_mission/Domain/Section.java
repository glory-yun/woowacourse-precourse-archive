package woowatech.open_mission.Domain;

import java.util.Map;

public class Section {
    Map<String, String> section;

    public Section(Map<String, String> section) {
        this.section = section;
    }

    public Map<String, String> getSection() {
        return this.section;
    }

    //setter
    public void setSection(Map<String, String> section) {
        this.section = section;
    }
}