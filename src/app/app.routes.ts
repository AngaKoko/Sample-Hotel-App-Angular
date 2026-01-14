import { Routes } from '@angular/router';
import { HomeCompoent } from './home/home';
import { ReservationListComponent } from './reservation-list/reservation-list';
import { ReservationFormCompoment } from './reservation-form/reservation-form';

export const routes: Routes = [
    {path: "", component: HomeCompoent},
    {path: "list", component: ReservationListComponent},
    {path: "new", component: ReservationFormCompoment}
];
