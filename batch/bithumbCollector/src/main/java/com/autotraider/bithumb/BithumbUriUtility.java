package com.autotraider.bithumb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.autotraider.collector.BithumbSettings;

@Component
public class BithumbUriUtility {
	
	
	private final BithumbSettings settings;
	
	@Autowired
	public BithumbUriUtility(BithumbSettings settings) {
		this.settings = settings;
	}

}
