import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AlertService {

    private defaultId = 'default-alert';

    error(message: string, options?: any) {
    }

    // Limpar alerts
    clear(id = this.defaultId) {
    }
    
}