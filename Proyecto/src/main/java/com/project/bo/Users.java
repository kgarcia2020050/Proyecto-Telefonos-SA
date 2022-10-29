package com.project.bo;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
@Data
public class Users {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ID", nullable = false)
    private int id;
    @Basic
    @Column(name = "USERNAME", nullable = true, length = 30)
    private String username;
    @Basic
    @Column(name = "PASSWORD", nullable = true, length = 255)
    private String password;
    @Basic
    @Column(name = "NAME", nullable = true, length = 100)
    private String name;

}
