package com.autotraider.collector;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.stereotype.Component;

import com.autotraider.misc.AutotraiderException;
import com.autotraider.model.BithumbCollector;
import com.autotraider.model.User;
import com.autotraider.repository.BaseCollectorRepository;
import com.autotraider.repository.BithumbCollectorRepository;
import com.autotraider.repository.UserRepository;
import com.autotraider.util.CollectorConstants;


@Component
public class BithumbCollectorTask extends CollectorTask<BithumbCollector> {
	private static final Logger LOGGER = LoggerFactory.getLogger(BithumbCollectorTask.class);

	private final BithumbCollectorRepository bithumbCollectorRepository;
	private final BithumbSettings bithumbSettings;
	private final BithumbService bithumbService;

	@Autowired
	public BithumbCollectorTask(TaskScheduler taskScheduler, BithumbCollectorRepository bithumbCollectorRepository,
			BithumbSettings bithumbSettings, BithumbService bithumbService) throws AutotraiderException {
		super(taskScheduler, CollectorConstants.BITHUMB);
		this.bithumbCollectorRepository = bithumbCollectorRepository;
		this.bithumbSettings = bithumbSettings;
		this.bithumbService = bithumbService;
	}

	@Override
	public BithumbCollector getCollector() {
		return BithumbCollector.prototype();
	}

	@Override
	public BaseCollectorRepository<BithumbCollector> getCollectorRepository() {
		return bithumbCollectorRepository;
	}

	@Override
	public String getCron() {
		return bithumbSettings.getCron();
	}

	@Override
	public void collect(BithumbCollector collector) {
		logBanner("Starting...");
		Long startTime = System.currentTimeMillis();
		
		logResults(startTime);
		
		logBanner("End...");
	}
    

	private void logResults(long startTime) {

		log("test", startTime);
	}

}
