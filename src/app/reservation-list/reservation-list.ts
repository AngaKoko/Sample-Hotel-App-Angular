import { Component } from '@angular/core';
import { ReservationModule } from '../reservation/reservation-module';

@Component({
  selector: 'app-reservation-list',
  imports: [ReservationModule],
  templateUrl: './reservation-list.html',
  styleUrl: './reservation-list.css',
})
export class ReservationListComponent {

}
