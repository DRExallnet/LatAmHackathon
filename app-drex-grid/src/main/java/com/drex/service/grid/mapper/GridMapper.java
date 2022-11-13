package com.drex.service.grid.mapper;

import com.drex.service.expose.dto.reponse.GridDtoResponse;
import com.drex.service.expose.dto.request.GridDtoRequest;
import com.drex.service.grid.model.entity.Grid;
import com.drex.service.grid.util.enums.CodeEnum;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", imports = {CodeEnum.class})
public interface GridMapper {

    Grid toEntity(GridDtoRequest request);

    @Mapping(target = "grid_code", expression = "java(CodeEnum.findById(1))")
    GridDtoResponse toResponse(Grid grid);
}
