package com.drex.service.expose.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
@Setter
public class GridDtoRequest {
    @NotNull
    @JsonProperty("grid-id")
    private Integer grid_id;
    @NotNull
    private Double voltage;
    @NotNull
    private Double current;
    @NotNull
    private Double energy;
    @NotNull
    @JsonProperty("energy-acum")
    private Double energy_acum;
    @NotNull
    private LocalDateTime datetime;
}
