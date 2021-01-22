package io.jenkins.plugins.luxair.model;

public enum Ordering {
    NATURAL("Natural Ordering"),
    REV_NATURAL("Reverse Natural Ordering"),
    DSC_VERSION("Descending Versions"),
    ASC_VERSION("Ascending Versions"),
    DSC_TIMESTAMP("Descending Timestamp"),
    ASC_TIMESTAMP("Ascending Timestamp");


    public final String value;

    Ordering(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return this.value;
    }
}
