import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.html',
  styleUrl: './intro.css',
})
export class Intro implements OnInit {
 roles: string[] = [
    "Senior Software Engineer",
    "Senior Frontend Developer",
    "Angular Developer",
    "Problem Solver"
  ];

  currentRole: string = "";
  index: number = 0;

  ngOnInit(): void {
    this.currentRole = this.roles[0];

    setInterval(() => {
      this.index = (this.index + 1) % this.roles.length;
      this.currentRole = this.roles[this.index];
    }, 1800);
  }
}
