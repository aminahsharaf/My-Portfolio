import { Component } from "@angular/core";

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
      <h1 class="text-xl font-bold">Amina</h1>
      <ul class="hidden md:flex space-x-6">
        <li><a href="#about" class="hover:text-blue-500">About</a></li>
        <li><a href="#projects" class="hover:text-blue-500">Projects</a></li>
        <li><a href="#contact" class="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  `
})
export class NavbarComponent {}
