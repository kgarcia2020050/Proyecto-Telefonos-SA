package com.project.repository;

import com.project.bo.Calls;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CallRepository extends JpaRepository<Calls, Integer> {

    public abstract List<Calls> findAllByUserIdAndDone(Integer id, Byte done);

    public abstract Calls findAllByUserIdAndId(Integer userId, Integer id);

    public abstract List<Calls> findAllByUserIdAndDate(Integer id, String date);

    public abstract List<Calls> findAllByUserId(Integer id);

}
