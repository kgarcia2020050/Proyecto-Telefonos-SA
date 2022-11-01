package com.project.controllers;


import com.project.bo.Calls;
import com.project.dto.CallDTO;
import com.project.exceptions.AuthException;
import com.project.service.CallsService;
import com.project.util.JwtUtil;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin("http://127.0.0.1:5173")
@RequestMapping(value = "calls")
public class CallController {

    private final CallsService callsService;

    private final JwtUtil jwtUtil;

    private final String MESSAGE = "No estas autorizado para realizar esta accion.";

    public CallController(CallsService callsService, JwtUtil jwtUtil) {
        this.callsService = callsService;
        this.jwtUtil = jwtUtil;
    }

    @GetMapping(value = "getUserCalls/{id}")
    public List<Calls> getCalls(@RequestHeader(value = "Authorization") String token, @PathVariable("id") Integer id) {
        String userId = jwtUtil.getKey(token);
        if (userId == null) {
            throw new AuthException(MESSAGE);
        }
        return callsService.findByDateAndUserId(id);
    }


    @PostMapping(value = "saveCall")
    public void saveCall(@RequestHeader(value = "Authorization") String token, @RequestBody @Valid CallDTO call) {
        String userId = jwtUtil.getKey(token);
        if (userId == null) {
            throw new AuthException("No estas autorizado para realizar esta accion.");
        }
        callsService.save(call);
    }

    @GetMapping(value = "getCalls/{id}")
    public List<Calls> prueba(@PathVariable("id") Integer id) {
        return callsService.findAllByUserIdAndDateAndTimes(id);
    }


    @GetMapping(value = "callsByDate/{id}/{date}")
    public List<Calls> findAllByIdAndDate(@RequestHeader(value = "Authorization") String token, @PathVariable("id") Integer id, @PathVariable String date) {
        String userId = jwtUtil.getKey(token);
        if (userId == null) {
            throw new AuthException("No estas autorizado para realizar esta accion.");
        }
        return callsService.findAllByUserIdAndDate(id, date);
    }

    @GetMapping(value = "call/{id}/{userId}")
    public Calls findById(@RequestHeader(value = "Authorization") String token, @PathVariable("id") Integer id, @PathVariable("userId") Integer userId) {
        String uId = jwtUtil.getKey(token);
        if (uId == null) {
            throw new AuthException("No estas autorizado para realizar esta accion.");
        }
        return callsService.findByIdAndUserId(id, userId);
    }


    @PutMapping(value = "udpateCalls/{id}")
    public void updateCalls(@RequestHeader(value = "Authorization") String token, @PathVariable("id") Integer id) {
        String userId = jwtUtil.getKey(token);
        if (userId == null) {
            throw new AuthException("No estas autorizado para realizar esta accion.");
        }
        callsService.updateCalls(id);
    }


}
