import { Injectable } from "@angular/core";

// it's good practice to add this if services are being injected into one another
@Injectable()
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status' + status);
    }
}