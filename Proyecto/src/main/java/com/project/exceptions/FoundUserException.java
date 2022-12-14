package com.project.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class FoundUserException extends RuntimeException {
    private static final long serialVersionUID = -2265661485352624884L;

    public FoundUserException(String message) {
        super(message);
    }
}
