package com.project.dto;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
public class UserDTO {
    @NotEmpty(message = "El nombre de usuario no puede estar vacio.")
    @Size(min = 10, max = 30, message = "El nombre de usuario debe medir entre 10 y 30 caracteres.")
    private String username;
    @NotEmpty(message = "El nombre de usuario no puede estar vacio.")
    @Size(min = 10, max = 30, message = "El nombre de usuario debe medir entre 10 y 30 caracteres.")
    private String name;
    @NotEmpty(message = "La clave no puede estar vacia.")
    @Size(min = 8, max = 30, message = "La clave debe medir entre 8 y 30 caracteres.")
    private String password;
}
