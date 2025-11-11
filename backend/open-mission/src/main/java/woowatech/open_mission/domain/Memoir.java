package woowatech.open_mission.domain;

import java.util.Date;

public class Memoir {
    private String title;
    private Date date;
    private Contents contents;


    public Memoir(String title, Contents contents, Date date) {
        this.title = title;
        this.contents = contents;
        this.date = date;
    }

    public String getTitle() {
        return this.title;
    }

    public Date getDate() {
        return this.date;
    }

    public Contents getContents() {
        return this.contents;
    }

    //setter
    public void setTitle(String title) {
        this.title = title;
    }

    public void setContents(Contents contents) {
        this.contents = contents;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
