/**
 * Log levels for the logger.
 * - "debug": Detailed debug information (for development).
 * - "info": General operational messages (e.g., "User registered").
 * - "warn": Warnings that indicate potential issues.
 * - "error": Errors that need immediate attention.
 * - "fatal": Critical errors that require immediate attention (e.g., system crashes)
 */
type LogLevel = "debug" | "info" | "warn" | "error" | "fatal";

/**
 * Logger utility
 */
class Logger {
    // Current log level
    private level: LogLevel;

    /**
     * Creates a new Logger instance.
     *
     * @param {LogLevel} level - The minimum log level to output. Defaults to "info".
     */
    constructor(level: LogLevel = "info") {
        if (!["debug", "info", "warn", "error", "fatal"].includes(level)) {
            throw new Error(`Invalid log level: ${level}`);
        }
        this.level = level;
    }

    /**
     * Determines whether a log message should be output based on the current log level.
     *
     * @param {LogLevel} level - The log level of the message.
     * @returns {boolean} - True if the message should be logged, false otherwise.
     */
    private readonly logLevels = new Map<LogLevel, number>([
        ["debug", 0],
        ["info", 1],
        ["warn", 2],
        ["error", 3],
        ["fatal", 4],
    ]);
    private shouldLog(level: LogLevel): boolean {
        return (
            (this.logLevels.get(level) ?? 0) >=
            (this.logLevels.get(this.level) ?? 0)
        );
    }

    /**
     * Serializes a log entry into a JSON string.
     * This avoids the overhead of `JSON.stringify` and manually constructs the JSON string.
     *
     * @param {LogLevel} level - The log level of the message.
     * @param {string} message - The log message.
     * @param {Record<string, unknown>} [context] - Additional context to include in the log.
     * @returns {string} - The serialized JSON log entry.
     */
    private serializeLog(
        level: LogLevel,
        message: string,
        context?: Record<string, unknown>,
    ): string {
        const logEntry = {
            level,
            message,
            timestamp: new Date().toISOString(),
            ...context,
        };

        return JSON.stringify(logEntry);
    }

    /**
     * Logs a message with the specified level and context.
     * Logging is done asynchronously using `setImmediate` to avoid blocking the main thread.
     *
     * @param {LogLevel} level - The log level of the message.
     * @param {string} message - The log message.
     * @param {Record<string, unknown>} [context] - Additional context to include in the log.
     */
    private log(
        level: LogLevel,
        message: string,
        context?: Record<string, unknown>,
    ) {
        // Skip logging if the message level is below the current log level
        if (!this.shouldLog(level)) return;

        // Serialize the log entry into a JSON string
        const logEntry = this.serializeLog(level, message, context);

        // Define colors for each log level
        const colors = {
            debug: "\x1b[36m", // Cyan
            info: "\x1b[32m", // Green
            warn: "\x1b[33m", // Yellow
            error: "\x1b[31m", // Red
            fatal: "\x1b[41m\x1b[37m",
        };

        // Reset color after the log message
        const resetColor = "\x1b[0m";

        // Prefix the log with "pmt_logs"
        const prefixedMessage = `pmt_logs: ${logEntry}`;

        // Log asynchronously to avoid blocking the main thread
        setImmediate(() => {
            switch (level) {
                case "debug":
                    console.debug(
                        `${colors.debug}${prefixedMessage}${resetColor}`,
                    );
                    break;
                case "info":
                    console.info(
                        `${colors.info}${prefixedMessage}${resetColor}`,
                    );
                    break;
                case "warn":
                    console.warn(
                        `${colors.warn}${prefixedMessage}${resetColor}`,
                    );
                    break;
                case "error":
                    console.error(
                        `${colors.error}${prefixedMessage}${resetColor}`,
                    );
                    break;
                case "fatal":
                    console.error(
                        `${colors.fatal}${prefixedMessage}${resetColor}`,
                    );
                    break;
            }
        });
    }

    /**
     * Logs a debug message.
     *
     * @param {string} message - The debug message.
     * @param {Record<string, unknown>} [context] - Additional context to include in the log.
     */
    debug(message: string, context?: Record<string, unknown>) {
        this.log("debug", message, context);
    }

    /**
     * Logs an info message.
     *
     * @param {string} message - The info message.
     * @param {Record<string, unknown>} [context] - Additional context to include in the log.
     */
    info(message: string, context?: Record<string, unknown>) {
        this.log("info", message, context);
    }

    /**
     * Logs a warning message.
     *
     * @param {string} message - The warning message.
     * @param {Record<string, unknown>} [context] - Additional context to include in the log.
     */
    warn(message: string, context?: Record<string, unknown>) {
        this.log("warn", message, context);
    }

    /**
     * Logs an error message.
     *
     * @param {string} message - The error message.
     * @param {Record<string, unknown>} [context] - Additional context to include in the log.
     */
    error(message: string, context?: Record<string, unknown>) {
        this.log("error", message, context);
    }

    /**
     * Logs a fatal error message.
     *
     * @param {string} message - The fatal error message.
     * @param {Record<string, unknown>} [context] - Additional context to include in the log.
     */
    fatal(message: string, context?: Record<string, unknown>) {
        this.log("fatal", message, context);
    }
}

// Create a logger instance with the appropriate log level based on the environment
const logger = new Logger(
    process.env.NODE_ENV === "development" ? "debug" : "info",
);

export { logger };
