package woowatech.open_mission.Domain;

import java.util.List;

public class Contents {
    private List<Section> sections;

    public Contents(List<Section> sections) {
        this.sections = sections;
    }

    public List<Section> getSectionList() {
        return this.sections;
    }

    //setter
    public void setSections(List<Section> sections) {
        this.sections = sections;
    }
}
