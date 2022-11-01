package com.project.bo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Calls {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ID", nullable = false)
    private int id;
    @Basic
    @Column(name = "NUMBER", nullable = true, length = 40)
    private String number;
    @Basic
    @Column(name = "NUMBER_DESCRIPTION", nullable = true, length = 255)
    private String numberDescription;
    @Basic
    @Column(name = "TYPE", nullable = true, length = 30)
    private String type;
    @Basic
    @Column(name = "SOLUTION", nullable = true, length = 255)
    private String solution;
    @Basic
    @Column(name = "START_TIME", nullable = true, length = 30)
    private String startTime;
    @Basic
    @Column(name = "FINISH_TIME", nullable = true, length = 30)
    private String finishTime;
    @Basic
    @Column(name = "DONE", nullable = true)
    private Byte done;
    @Basic
    @Column(name = "USER_ID", nullable = true)
    private Integer userId;
    @Basic
    @Column(name = "START_DAY", nullable = true, length = 30)
    private String startDay;
    @Basic
    @Column(name = "FINISH_DAY", nullable = true, length = 30)
    private String finishDay;
    @Basic
    @Column(name = "DATE", nullable = true, length = 30)
    private String date;


    public Calls(String date, String startDay, String finishDay) {
        this.startDay = startDay;
        this.finishDay = finishDay;
        this.date = date;
    }

    public Calls(String finishDay) {
        this.finishDay = finishDay;
    }
}
