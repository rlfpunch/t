package com.autotraider.model;

/**
 * Enumerates the possible {@link Collector} types.
 */
public enum CollectorType {
	EXECUTION,
    BITHUMB;

    public static CollectorType fromString(String value) {
        for (CollectorType collectorType : values()) {
            if (collectorType.toString().equalsIgnoreCase(value)) {
                return collectorType;
            }
        }
        throw new IllegalArgumentException(value + " is not a CollectorType");
    }
}