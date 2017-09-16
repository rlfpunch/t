package com.autotraider.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.repository.CrudRepository;

import com.autotraider.model.Collector;
import com.autotraider.model.CollectorType;

public interface BaseCollectorRepository<T extends Collector> extends CrudRepository<T, ObjectId> {

    T findByName(String name);

    List<T> findByCollectorType(CollectorType collectorType);

    List<T> findByCollectorTypeAndName(CollectorType collectorType, String name);
}