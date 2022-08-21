import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ClientsService } from '../clients.service';
import { Client, Response } from '../../utils/types';
import { NotificationService } from "src/app/utils/notification.service";

@Component({
  selector: 'app-clients-add',
  templateUrl: './clients-add.component.html',
  styleUrls: ['./clients-add.component.scss']
})
export class ClientsAddComponent {
  profileForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private clientService: ClientsService,
    private router: Router,
    private notifier: NotificationService
  ) { }

  onSubmit() {
    this.clientService.saveClient(this.profileForm.value as Client).subscribe(data => {
      const response = data as Response;
      this.notifier.showNotification(response.message);
      localStorage.setItem('client', this.profileForm.value.id ?? '')
      this.router.navigate(['/investment-funds']);
      this.profileForm.reset();
    })
  }
}