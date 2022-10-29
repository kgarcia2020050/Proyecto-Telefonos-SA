package com.project.service;

import com.project.bo.Users;
import com.project.dto.UserDTO;
import com.project.exceptions.FoundUserException;
import com.project.mapper.UserMapper;
import com.project.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserService(UserRepository userRepository, UserMapper userMapper) {
        this.userMapper = userMapper;
        this.userRepository = userRepository;
    }


    public Users findByUserName(String name) {
        return userRepository.findByUsername(name);
    }


    public List<Users> getUsers() {
        return userRepository.findAll();
    }

    public void saveUser(UserDTO user) {
        Users foundUser = findByUserName(user.getUsername());
        if (foundUser != null || foundUser != null || foundUser != null || foundUser != null) {
            throw new FoundUserException("Este nombre de usuario ya existe, prueba con uno diferente.");
        } else {
            Users model = userMapper.map(user);
            userRepository.save(model);
        }

    }


    public void firstUser() {
        final String name = "ADMIN";
        if (findByUserName(name) == null || findByUserName(name.trim()) == null || findByUserName(name.toLowerCase()) == null || findByUserName(name.toUpperCase()) == null) {
            Users user = new Users();
            user.setUsername(name);
            user.setPassword("123456");
            userRepository.save(user);
        }
    }

}
