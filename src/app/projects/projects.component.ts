import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  openedIndex: number | null = null;

  toggleProject(index: number) {
    this.openedIndex = this.openedIndex === index ? null : index;
  }

  projects = [
    {
      title: 'PAiGE – Platform for Academic Investigation and Group Exploration',
      role: 'Team Lead (8 Members)',
      details: [
        'Built a node-based document research tool using Angular + Rete.js.',
        'Drag-and-drop workspace to analyze and categorize research content.',
        'Custom PDF Viewer with highlight, tag & comment system.',
        'Created custom nodes: PDF Viewer, Mindmap, Table, Shapes, Licit Editor.'
      ]
    },
    {
      title: 'KNITE – Knowledge Network for Integrated Tactical Employment',
      role: 'Frontend Developer',
      details: [
        'Angular + NgRx based knowledge management system.',
        '.docx/.zip parsing to JSON with editable WYSIWYG editor.',
        'Improved rendering performance by 30% with lazy loading and component restructuring.'
      ]
    },
    {
      title: 'Maximus Life',
      role: 'Mobile App Developer',
      details: [
        'Hybrid mobile app development using Angular + Cordova.',
        'Gamified UI & Facebook OAuth integration.',
        'Reduced release cycle time by 40% with automated workflows.'
      ]
    }
  ];
}
