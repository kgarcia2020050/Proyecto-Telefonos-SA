package com.project.mapper;

public interface MapperDTO<I, O> {
    public O map(I object);
}