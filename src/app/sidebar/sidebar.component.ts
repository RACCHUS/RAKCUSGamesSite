import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {
  isHovering = false;
  showPlayButton = false;
  backgroundStyle = '';

  constructor(private router: Router) { }

  onMouseEnter() {
    this.isHovering = true;
  }

  onMouseLeave() {
    this.isHovering = false;
  }

  navigateHome() {
    this.router.navigate(['/']);
  }

  onMythicMightClick() {
    this.backgroundStyle = 'linear-gradient(to right, #2c2d34, #467a5e)';
    this.showPlayButton = true;
    this.router.navigate(['/mythic-might']);
  }

  onJottoClick() {
    this.backgroundStyle = 'linear-gradient(to right, #2c2d34, #467a5e)';
    this.router.navigate(['/jotto']);
  }

  onAboutClick() {
    this.backgroundStyle = 'linear-gradient(to right, #2c2d34, #467a5e)';
    this.showPlayButton = true;
    this.router.navigate(['/about']);
  }

}