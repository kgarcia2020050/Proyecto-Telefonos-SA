package com.project.controllers;

import com.project.bo.Users;
import com.project.dto.UserDTO;
import com.project.service.UserService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin("http://127.0.0.1:5173")
@RequestMapping(value = "users")
public class UserController {


    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value = "newUser")
    public void saveUser(@RequestBody @Valid UserDTO user) {
        userService.saveUser(user);
    }

    @GetMapping(value = "getUsers")
    public List<Users> getUsers() {
        return userService.getUsers();
    }


}
