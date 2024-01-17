import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-mythic-might',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './mythic-might.component.html',
  styleUrls: ['./mythic-might.component.scss']
})
export class MythicMightComponent {
  
}