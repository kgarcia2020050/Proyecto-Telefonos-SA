package com.project.dto;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Data
public class CallDTO {

    @NotEmpty(message = "El numero no debe quedar vacio.")
    @NotNull
    @Size(min = 8, max = 20, message = "El numero debe tener minimo 8 caracteres.")
    private String number;
    @NotNull
    @NotEmpty(message = "La descripcion del numero no debe quedar vacia.")
    private String numberDescription;
    private String type;
    @NotNull
    @NotEmpty(message = "La solucion no debe quedar vacia.")
    private String solution;
    private String startTime;
    private String finishTime;
    private String startDay;
    private String finishDay;
    private String date;
    private Integer userId;
}
