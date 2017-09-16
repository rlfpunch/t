package com.autotraider.util;

public class UnsafeDeleteException extends RuntimeException {
	private static final long serialVersionUID = -664077740219817001L;
	public UnsafeDeleteException() {
        super();
    }
    public UnsafeDeleteException(String s) {
        super(s);
    }
    public UnsafeDeleteException(String s, Throwable throwable) {
        super(s, throwable);
    }
    public UnsafeDeleteException(Throwable throwable) {
        super(throwable);
    }

}
