package com.project.repository;

import com.project.bo.Calls;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CallRepository extends JpaRepository<Calls, Integer> {

    public abstract List<Calls> findAllByUserIdAndDone(Integer id, Byte done);

    public abstract List<Calls> findAllByUserIdAndAndDate(Integer id, String date);

    public abstract Calls findAllByUserIdAndId(Integer userId, Integer id);

    public abstract List<Calls> findAllByUserIdAndDate(Integer id, String date);


    @Query(value = "select new com.project.bo.Calls(cs.date, cs.startDay, cs.finishDay)from Calls cs where cs.userId=" +
            "(select c.userId from Calls c where c.userId=:id group by c.userId) and cs.done=:done group by cs.date")
    public abstract List<Calls> findCallsByUserIdAAndDone(Integer id,Byte done);


    @Query(value = "select new com.project.bo.Calls(cs.date, cs.startDay, cs.finishDay) from Calls cs where cs.userId=:id and cs.date=:date order by cs.id desc ")
    public abstract List<Calls> findLastFinishDay(Integer id,String date);

    @Query(value = "select new com.project.bo.Calls(cs.date, cs.startDay, cs.finishDay) from Calls cs where cs.userId=:id and cs.date=:date order by cs.id ")
    public abstract List<Calls> findFirstStartDay(Integer id,String date);

}
