package com.autotraider.bithumb;

import org.springframework.stereotype.Component;

import com.autotraider.model.Bithumb;

@Component
public class BithumbDataMapper {
	
	
	public Bithumb mapToFeatureItem() {
		return new Bithumb();
	}
}
