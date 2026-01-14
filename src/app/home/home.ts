import { Component } from '@angular/core';
import { HomeModule } from './home-module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HomeModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeCompoent {

}
