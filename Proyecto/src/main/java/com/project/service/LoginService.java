package com.project.service;


import com.project.bo.Users;
import com.project.dto.UserDTO;
import com.project.exceptions.NotFoundException;
import com.project.repository.UserRepository;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    private final UserRepository userRepository;


    public LoginService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public Users login(UserDTO users) {
        Users usuario = userRepository.findByUsername(users.getUsername());
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        if (usuario == null) {
            throw new NotFoundException("No se encontro al nombre de usuario");
        } else if (usuario.getUsername().equals(users.getUsername()) && argon2.verify(usuario.getPassword(), users.getPassword().toCharArray())) {
            return usuario;
        } else {
            throw new NotFoundException("No se encontro al nombre de usuario");
        }
    }
}
