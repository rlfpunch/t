package com.autotraider.model;

import java.util.HashMap;
import java.util.Map;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "collectors")
public class Collector extends BaseModel {
    private String name;
    private CollectorType collectorType;
    private boolean enabled;
    private boolean online;
    //Every collector will have its own set of required and all fields depending upon the specific tool.
    private Map<String, Object> uniqueFields = new HashMap<>();
    private Map<String, Object> allFields = new HashMap<>();

    private long lastExecuted;

    public Collector() {
    }

    public Collector(String name, CollectorType collectorType) {
        this.name = name;
        this.collectorType = collectorType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public CollectorType getCollectorType() {
        return collectorType;
    }

    public void setCollectorType(CollectorType collectorType) {
        this.collectorType = collectorType;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public boolean isOnline() {
        return online;
    }

    public void setOnline(boolean online) {
        this.online = online;
    }

    public long getLastExecuted() {
        return lastExecuted;
    }

    public void setLastExecuted(long lastExecuted) {
        this.lastExecuted = lastExecuted;
    }

    public Map<String, Object> getUniqueFields() {
        return uniqueFields;
    }

    public void setUniqueFields(Map<String, Object> uniqueFields) {
        this.uniqueFields = uniqueFields;
    }

    public Map<String, Object> getAllFields() {
        return allFields;
    }

    public void setAllFields(Map<String, Object> allFields) {
        this.allFields = allFields;
    }
}