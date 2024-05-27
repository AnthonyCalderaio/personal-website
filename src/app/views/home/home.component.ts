import { Component } from '@angular/core';
import { LinkService } from '../../services/link.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  version: string = '';

  constructor(private linkService: LinkService) {
    this.linkService.getVersion().subscribe((response: any) => {
      this.version = response?.version
    })
  }

}
