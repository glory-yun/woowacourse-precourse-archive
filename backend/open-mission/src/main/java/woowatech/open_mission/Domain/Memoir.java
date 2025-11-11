package woowatech.open_mission.Domain;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class Memoir {

    private String title;
    private Date date;
    private Contents contents;

    public Memoir(String title, Contents contents, Date date) {
        this.title = title;
        this.contents = contents;
        this.date = date;
    }
}
