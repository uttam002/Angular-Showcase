import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomePageComponent,NavbarComponent,ProjectsComponent,AboutUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WorkShop';
}
