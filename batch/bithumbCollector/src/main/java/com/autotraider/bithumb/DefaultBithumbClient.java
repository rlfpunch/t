package com.autotraider.bithumb;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestOperations;

@Component
public class DefaultBithumbClient implements BithumbClient {
	
    private static final Logger LOGGER = LoggerFactory.getLogger(DefaultBithumbClient.class);
	private static final String PAGINATION_HEADER = "X-Next-Page";
	
	private final RestOperations restOperations;
	private final BithumbUriUtility urlUtility;
	
	@Autowired
	public DefaultBithumbClient(RestOperations restOperations, BithumbUriUtility urlUtility) {
		this.restOperations = restOperations;
		this.urlUtility = urlUtility;
	}

}
