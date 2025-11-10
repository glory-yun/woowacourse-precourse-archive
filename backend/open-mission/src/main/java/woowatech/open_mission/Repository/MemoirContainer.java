package woowatech.open_mission.Repository;

import org.springframework.stereotype.Repository;
import woowatech.open_mission.Domain.Memoir;

import java.util.HashMap;
import java.util.Map;

@Repository
public class MemoirContainer {
    private final Map<Integer, Memoir> memoirMap;
    private int id;

    public MemoirContainer() {
        this.memoirMap = new HashMap<>();
        id = 0;
    }

    //회고록 저장
    public void saveMemoir(Memoir memoir) {
        memoirMap.put(++id, memoir);
    }

    //회고록 삭제
    public void removeMemoir(Integer memoirId) {
        memoirMap.remove(memoirId);
    }

    //전체 매핑된 회고록 가져오기
    public Map<Integer, Memoir> getMemoirMap() {
        return memoirMap;
    }
}