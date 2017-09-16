package com.autotraider.event;

import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;

import com.autotraider.repository.BithumbRepository;

public abstract class AutotraiderMongoEventListener<T> extends AbstractMongoEventListener<T> {

    protected final BithumbRepository bithumbRepository;

    public AutotraiderMongoEventListener(BithumbRepository bithumbRepository) {
        this.bithumbRepository = bithumbRepository;
    }

}
