package com.project.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class AuthException extends RuntimeException {
    private static final long serialVersionUID = -2265661485352624884L;

    public AuthException(String message) {
        super(message);
    }
}
