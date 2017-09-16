
package com.autotraider.model;

import com.autotraider.util.CollectorConstants;

public class BithumbCollector extends Collector {
	public static BithumbCollector prototype() {
		BithumbCollector protoType = new BithumbCollector();
		protoType.setName(CollectorConstants.BITHUMB);
		protoType.setOnline(true);
		protoType.setEnabled(true);
		protoType.setCollectorType(CollectorType.BITHUMB);
		protoType.setLastExecuted(System.currentTimeMillis());

		return protoType;
	}
}
