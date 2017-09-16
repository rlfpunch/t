package com.autotraider.collector;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.autotraider.bithumb.BithumbClient;

@Service
public class BithumbService {

	private final BithumbClient bithumbClient;

	@Autowired
	public BithumbService(BithumbClient bithumbClient) {
		this.bithumbClient = bithumbClient;
	}

}
