package woowatech.open_mission;

import woowatech.open_mission.Controller.MemoirController;
import woowatech.open_mission.DTO.MemoirSummaryDto;
import woowatech.open_mission.Domain.Contents;
import woowatech.open_mission.Domain.Memoir;
import woowatech.open_mission.Domain.Section;
import woowatech.open_mission.Repository.MemoirContainer;

import java.util.*;


public class Test {

    public void printMemoirList(Map<Integer, Memoir> memoirList) {
        for (Memoir m : memoirList.values()) {
            System.out.println("제목: " + m.getTitle());
            System.out.println("날짜: " + m.getDate());

            // ✅ 각 Section 내부 출력
            for (Section s : m.getContents().getSectionList()) {
                for (Map.Entry<String, String> entry : s.getSection().entrySet()) {
                    System.out.println(entry.getKey() + " → " + entry.getValue());
                }
            }
            System.out.println("---------------------------");
        }
        // ✅ 전체 개수 출력
        System.out.println("총 회고록 개수: " + memoirList.size());
    }

    public static void main(String[] args) {

    }
}