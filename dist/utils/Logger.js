"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
/**
 * Utilitaire de logging
 */
class Logger {
    static info(message) {
        console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
    }
    static warn(message) {
        console.warn(`[WARN] ${new Date().toISOString()} - ${message}`);
    }
    static error(message, error) {
        console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
        if (error) {
            console.error(error.stack);
        }
    }
    static success(message) {
        console.log(`[SUCCESS] ${new Date().toISOString()} - ${message}`);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map