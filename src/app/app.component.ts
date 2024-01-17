import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
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

  onMythicMightClick() {
    this.backgroundStyle = 'linear-gradient(to right, #2c2d34, #467a5e)';
    this.showPlayButton = true;
    this.router.navigate(['/mythic-might']);
  }

}