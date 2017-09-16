package com.autotraider.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User extends BaseModel {
	private String username;
	private String email;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
}
