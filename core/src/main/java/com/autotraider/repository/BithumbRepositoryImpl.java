package com.autotraider.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.BasicQuery;

import com.autotraider.model.Bithumb;

public class BithumbRepositoryImpl implements BithumbRepositoryCustom {

    @Autowired
    private MongoOperations operations;
    
    @Override
    public List<Bithumb> test() {
        BasicQuery query = null;
        
        return operations.find(query, Bithumb.class);
    }
}
