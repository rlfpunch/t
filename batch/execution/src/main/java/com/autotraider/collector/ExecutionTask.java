package com.autotraider.collector;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.stereotype.Component;

import com.autotraider.misc.AutotraiderException;
import com.autotraider.model.ExecutionCollector;
import com.autotraider.model.User;
import com.autotraider.repository.BaseCollectorRepository;
import com.autotraider.repository.BithumbRepository;
import com.autotraider.repository.ExecutionRepository;
import com.autotraider.repository.UserRepository;
import com.autotraider.util.CollectorConstants;


@Component
public class ExecutionTask extends CollectorTask<ExecutionCollector> {
	private static final Logger LOGGER = LoggerFactory.getLogger(ExecutionTask.class);

	private final ExecutionRepository executionRepository;
	private final BithumbRepository bithumbRepository;
	private final UserRepository userRepository;
	private final ExecutionSettings executionSettings;

	@Autowired
	public ExecutionTask(TaskScheduler taskScheduler, ExecutionRepository executionRepository, UserRepository userRepository,
			BithumbRepository bithumbRepository, ExecutionSettings executionSettings) throws AutotraiderException {
		super(taskScheduler, CollectorConstants.BITHUMB);
		this.executionRepository = executionRepository;
		this.bithumbRepository = bithumbRepository;
		this.userRepository = userRepository;
		this.executionSettings = executionSettings;
	}

	@Override
	public ExecutionCollector getCollector() {
		return ExecutionCollector.prototype();
	}

	@Override
	public BaseCollectorRepository<ExecutionCollector> getCollectorRepository() {
		return executionRepository;
	}

	@Override
	public String getCron() {
		return executionSettings.getCron();
	}

	@Override
	public void collect(ExecutionCollector collector) {
		logBanner("Starting...");
		Long startTime = System.currentTimeMillis();
		
		logResults(startTime);
		
		logBanner("End...");
	}
    

	private void logResults(long startTime) {

		Iterable<User> users = userRepository.findAll();
		for(User user : users) {
			log(user.getUsername() + "/" + user.getEmail(), startTime);
		}
	}

}
