import { Component } from '@angular/core';
import { HomeModule } from './home-module';

@Component({
  selector: 'app-home',
  imports: [HomeModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
