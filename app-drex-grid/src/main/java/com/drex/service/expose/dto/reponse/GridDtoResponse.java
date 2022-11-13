package com.drex.service.expose.dto.reponse;

import com.drex.service.expose.dto.request.GridDtoRequest;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
@Setter
public class GridDtoResponse {
    @JsonProperty("grid-code")
    private String grid_code;
    private Double voltage;
    private Double current;
    private Double energy;
    @JsonProperty("energy-acum")
    private Double energy_acum;
    private LocalDateTime datetime;
}
