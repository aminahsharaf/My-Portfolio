import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Navbar } from './pages/navbar/navbar';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { WorkExperience } from './pages/work-experience/work-experience';
import { Achievements } from './pages/achievements/achievements';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Footer } from './pages/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Home,
    Navbar,
    Skills,
    Projects,
    WorkExperience,
    Achievements,
    About,
    Contact,
    Footer
  ],
  template: `
    <app-navbar></app-navbar>
    <main class="px-6 md:px-20">
      <app-home></app-home>
      <app-skills></app-skills>
     <!--  <app-projects></app-projects>  -->
      <app-work-experience></app-work-experience>
     <!-- <app-achievements></app-achievements> -->
      <app-about></app-about>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('AminaSharaf');
}
