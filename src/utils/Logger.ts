
export class Logger {
  public static info(message: string): void {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
  }

  public static warn(message: string): void {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`);
  }

  public static error(message: string, error?: Error): void {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
    if (error) {
      console.error(error.stack);
    }
  }

  public static success(message: string): void {
    console.log(`[SUCCESS] ${new Date().toISOString()} - ${message}`);
  }
}