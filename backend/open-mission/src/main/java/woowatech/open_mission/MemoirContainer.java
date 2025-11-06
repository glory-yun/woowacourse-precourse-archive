package woowatech.open_mission;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class MemoirContainer {
    private Map<Integer, Memoir> memoirMap;
    public MemoirContainer(Map<Integer,Memoir> memoirInput) {
        this.memoirMap = memoirInput;
    }

    public List<Memoir> getMemoir(){
        List<Memoir> list = new ArrayList<>();
        for(int i=0; i<memoirMap.size(); i++) {
            list.add(memoirMap.get(i));
        }
        return list;
    }
}
