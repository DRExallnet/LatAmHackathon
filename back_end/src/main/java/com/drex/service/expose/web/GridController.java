package com.drex.service.expose.web;

import com.drex.service.expose.dto.reponse.GridDtoResponse;
import com.drex.service.expose.dto.request.GridDtoRequest;
import com.drex.service.grid.business.GridService;
import io.reactivex.rxjava3.core.Completable;
import io.reactivex.rxjava3.core.Flowable;
import io.reactivex.rxjava3.core.Single;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "grid")
public class GridController {

    @Autowired
    private GridService gridService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/record")
    public Completable create(@RequestBody GridDtoRequest gridDtoRequest) {
        return gridService.record(gridDtoRequest);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/list")
    public Flowable<GridDtoResponse> list() {
        return gridService.list();
    };

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/last")
    public Single<GridDtoResponse> lastRecord() {
        return gridService.getLastRecord();
    };

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/list-each")
    public Single<List<List<GridDtoResponse>>> listEach() {
        return gridService.list2();
    };

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/status")
    public String checkStatus() {
        return "ok";
    }
}
