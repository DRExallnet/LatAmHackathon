package com.drex.service.grid.repository;

import com.drex.service.grid.model.entity.Grid;
import org.springframework.data.repository.reactive.RxJava3CrudRepository;

public interface GridRepository extends RxJava3CrudRepository<Grid, Long> {
}
