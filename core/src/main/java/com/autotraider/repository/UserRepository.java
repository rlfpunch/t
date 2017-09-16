package com.autotraider.repository;

import org.bson.types.ObjectId;
import org.springframework.data.repository.CrudRepository;

import com.autotraider.model.User;

public interface UserRepository extends CrudRepository<User, ObjectId>{

}