package com.autotraider.collector;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * Bean to hold settings specific to the Feature collector.
 * 
 */
@Component
@ConfigurationProperties(prefix = "bithumb")
public class BithumbSettings {
    
    private static final Log LOG = LogFactory.getLog(BithumbSettings.class);
	
	private String cron;

	public String getCron() {
		return cron;
	}

	public void setCron(String cron) {
		this.cron = cron;
	}
}
