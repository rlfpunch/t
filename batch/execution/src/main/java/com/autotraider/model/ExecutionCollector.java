
package com.autotraider.model;

import com.autotraider.util.CollectorConstants;

public class ExecutionCollector extends Collector {
	public static ExecutionCollector prototype() {
		ExecutionCollector protoType = new ExecutionCollector();
		protoType.setName(CollectorConstants.EXECUTION);
		protoType.setOnline(true);
		protoType.setEnabled(true);
		protoType.setCollectorType(CollectorType.EXECUTION);
		protoType.setLastExecuted(System.currentTimeMillis());

		return protoType;
	}
}
