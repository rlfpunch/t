package com.autotraider.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;

import com.autotraider.model.Bithumb;

public interface BithumbRepository extends CrudRepository<Bithumb, ObjectId>,
		QueryDslPredicateExecutor<Bithumb>, BithumbRepositoryCustom {

	@Query
	List<Bithumb> findById(ObjectId id);
}