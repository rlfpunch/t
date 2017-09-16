package com.autotraider.misc;

public class AutotraiderException extends Exception {
	private static final long serialVersionUID = 4596406816345733781L;
	public static final int NOTHING_TO_UPDATE = 0;
    public static final int JSON_FORMAT_ERROR = -1;
    public static final int ERROR_INSERTING_DATA = -12;
    public static final int DUPLICATE_DATA = -13;
    public static final int BAD_DATA = -14;
    
    public static final int INVALID_CONFIGURATION = -999;
    
    private int errorCode = 0;

    public AutotraiderException(String message, int errorCode) {
        super(message);
        this.errorCode = errorCode;
    }

    public AutotraiderException(String message, Throwable cause, int errorCode) {
        super(message, cause);
        this.errorCode = errorCode;
    }

    public AutotraiderException(Throwable cause) {
        super(cause);
    }

    public AutotraiderException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

    public int getErrorCode() {
        return errorCode;
    }
}
