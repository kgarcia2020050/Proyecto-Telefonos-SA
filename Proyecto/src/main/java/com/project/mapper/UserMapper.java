package com.project.mapper;

import com.project.bo.Users;
import com.project.dto.UserDTO;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

@Component
public class UserMapper implements MapperDTO<UserDTO, Users> {
    Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);

    @Override
    public Users map(UserDTO object) {
        Users newUser = new Users();
        char[] password = object.getPassword().toCharArray();
        String argonPassword = argon2.hash(1, 1024, 1, password);
        object.setPassword(argonPassword);
        BeanUtils.copyProperties(object, newUser);
        return newUser;

    }
}
