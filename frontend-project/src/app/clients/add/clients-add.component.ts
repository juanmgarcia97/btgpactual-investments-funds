import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ClientsService } from '../clients.service';
import { Client } from '../../utils/types';

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

  constructor(private fb: FormBuilder, private clientService: ClientsService, private router: Router) { }

  onSubmit() {
    this.clientService.saveClient(this.profileForm.value as Client).subscribe(data => {
      localStorage.setItem('client', this.profileForm.value.name ?? '')
      this.router.navigate(['/investment-funds']);
      this.profileForm.reset();
    })
  }
}