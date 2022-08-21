import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(public snackBar: MatSnackBar) { }

    showNotification(message: string): void {
        this.snackBar.open(message, 'Cerrar', { horizontalPosition: 'center', verticalPosition: 'top', duration: 4000 });
    }
}