import { Component } from '@angular/core';
import { ReservationModule } from '../reservation/reservation-module';

@Component({
  selector: 'app-reservation-form',
  imports: [ReservationModule],
  templateUrl: './reservation-form.html',
  styleUrl: './reservation-form.css',
})
export class ReservationForm {

}
