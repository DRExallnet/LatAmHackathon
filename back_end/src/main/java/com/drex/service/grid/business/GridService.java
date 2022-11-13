package com.drex.service.grid.business;

import com.drex.service.expose.dto.reponse.GridDtoResponse;
import com.drex.service.expose.dto.request.GridDtoRequest;
import io.reactivex.rxjava3.core.Completable;
import io.reactivex.rxjava3.core.Flowable;
import io.reactivex.rxjava3.core.Single;

import java.util.List;

public interface GridService {

    Completable record(GridDtoRequest gridDtoRequest);

    Flowable<GridDtoResponse> list();

    Single<List<List<GridDtoResponse>>> list2();

    Single<GridDtoResponse> getLastRecord();
}
