import { Component } from '@angular/core';
import { ReservationModule } from '../reservation/reservation-module';
import { FormGroup, FormBuilder, Validator, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './reservation-form.html',
  styleUrl: './reservation-form.css',
})
export class ReservationFormCompoment {

  reservationForm : FormGroup = new FormGroup({})

  onSubmit(){
    
  }
}
