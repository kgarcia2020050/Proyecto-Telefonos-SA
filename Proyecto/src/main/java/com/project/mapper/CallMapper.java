package com.project.mapper;

import com.project.bo.Calls;
import com.project.dto.CallDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class CallMapper implements MapperDTO<CallDTO, Calls> {

    @Override
    public Calls map(CallDTO object) {
        Calls newCall = new Calls();
        DateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
        String date = dateFormat.format(new Date());
        DateFormat dateFormat0 = new SimpleDateFormat("d MMM yyyy");
        String date0 = dateFormat0.format(new Date());
        if (object.getType().equals("") || object.getType() == null) {
            object.setType("Venta nueva");
        }
        BeanUtils.copyProperties(object, newCall);
        newCall.setDate(date0);
        newCall.setFinishTime(date);
        newCall.setDone((byte) 0);
        return newCall;
    }
}
