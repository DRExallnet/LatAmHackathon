package com.drex.service.grid.business.impl;

import com.drex.service.expose.dto.reponse.GridDtoResponse;
import com.drex.service.expose.dto.request.GridDtoRequest;
import com.drex.service.grid.business.GridService;
import com.drex.service.grid.mapper.GridMapper;
import com.drex.service.grid.model.entity.Grid;
import com.drex.service.grid.repository.GridRepository;
import com.google.common.collect.Lists;
import io.reactivex.rxjava3.core.Completable;
import io.reactivex.rxjava3.core.Flowable;
import io.reactivex.rxjava3.core.Single;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GridServiceImpl implements GridService {

    @Autowired
    private GridRepository gridRepository;

    @Autowired
    private GridMapper mapper;

    @Override
    public Completable record(GridDtoRequest gridDtoRequest) {
        return Completable.fromSingle(gridRepository.save(mapper.toEntity(gridDtoRequest)));
    }

    @Override
    public Flowable<GridDtoResponse> list() {
        return gridRepository.findAll().map(mapper::toResponse);
        // return customerRepository.findAll().map(customer -> customerMapper.toResponse(customer));
    }

    @Override
    public Single<List<List<GridDtoResponse>>> list2() {
        return this.list()
                .toList()
                .map(gridDtoRequests -> Lists.partition(gridDtoRequests, 100));
    }

    @Override
    public Single<GridDtoResponse> getLastRecord() {
        return gridRepository.count()
                .flatMap(aLong -> gridRepository.findById(aLong)
                        .defaultIfEmpty(new Grid())
                        .map(grid -> mapper.toResponse(grid)));
    }
}
