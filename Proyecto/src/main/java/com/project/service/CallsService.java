package com.project.service;

import com.project.bo.Calls;
import com.project.dto.CallDTO;
import com.project.mapper.CallMapper;
import com.project.repository.CallRepository;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class CallsService {

    private final CallRepository callRepository;
    private final CallMapper callMapper;

    public CallsService(CallRepository callRepository, CallMapper callMapper) {
        this.callRepository = callRepository;
        this.callMapper = callMapper;
    }


    public void save(CallDTO call) {
        Calls newCall = callMapper.map(call);
        callRepository.save(newCall);
    }

    public List<Calls> userCalls(Integer id,Byte done) {
        return callRepository.findAllByUserIdAndDone(id, done);
    }

    public List<Calls> findAllByUserIdAndDate(Integer id, String date) {
        return callRepository.findAllByUserIdAndDate(id, date);
    }


    public Calls findByIdAndUserId(Integer id, Integer userId) {
        return callRepository.findAllByUserIdAndId(userId, id);
    }


    public void updateCalls(Integer id) {
        DateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
        String date = dateFormat.format(new Date());
        List<Calls> calls = callRepository.findAllByUserIdAndDone(id, (byte) 0);
        if (calls.size() > 0) {
            for (int i = 0; i < calls.size(); i++) {
                calls.get(i).setDone((byte) 1);
                calls.get(i).setFinishDay(date);
            }

            callRepository.saveAll(calls);

        }
    }




}
