const fs = require('fs');
const path = require('path');

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Logger class
class Logger {
  constructor() {
    this.logFile = path.join(logsDir, 'app.log');
  }

  // Log info messages
  info(message) {
    const logEntry = this.formatLog('INFO', message);
    console.log(logEntry);
    this.writeToFile(logEntry);
  }

  // Log error messages
  error(message) {
    const logEntry = this.formatLog('ERROR', message);
    console.error(logEntry);
    this.writeToFile(logEntry);
  }

  // Log warning messages
  warn(message) {
    const logEntry = this.formatLog('WARN', message);
    console.warn(logEntry);
    this.writeToFile(logEntry);
  }

  // Format log entry
  formatLog(level, message) {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] ${level}: ${message}`;
  }

  // Write to log file
  writeToFile(logEntry) {
    try {
      fs.appendFileSync(this.logFile, logEntry + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error);
    }
  }
}

module.exports = new Logger();
