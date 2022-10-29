package com.project.controllers;

import com.project.bo.Calls;
import com.project.bo.Users;
import com.project.dto.UserDTO;
import com.project.exceptions.AuthException;
import com.project.service.LoginService;
import com.project.util.JwtUtil;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://127.0.0.1:5173")
public class LoginController {


    private final LoginService loginService;

    private final JwtUtil jwtUtil;

    public LoginController(LoginService loginService, JwtUtil jwtUtil) {
        this.loginService = loginService;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping(value = "service/login")
    public String[] login(@RequestBody UserDTO users) {
        Users user = loginService.login(users);
        if (user != null) {
            return new String[]{String.valueOf(user.getId()), jwtUtil.create(String.valueOf(user.getId()), user.getUsername())};
        } else {
            throw new AuthException("No estas autorizado para realizar esta accion.");
        }
    }

}
