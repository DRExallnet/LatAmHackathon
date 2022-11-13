package com.drex.service.grid.model.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;

@Table(name = "Grid")
@Getter
@Setter
public class Grid {
    @Id
    @Column
    private Long id;
    @Column
    private Long grid_id;
    @Column
    private Double voltage;
    @Column
    private Double current;
    @Column
    private Double energy;
    @Column
    private Double energy_acum;
    @Column
    private LocalDateTime datetime;
}
