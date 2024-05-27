import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { LoadingIndicatorComponent } from '../../widgets/loading-indicator/loading-indicator.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ProjectCardComponent } from '../../templates/project-card/project-card.component';
import { LinkService } from '../../services/link.service';
import { environment } from '../../../environments/environment';
import { ML_CARDS } from './cards';

@Component({
  selector: 'app-machine-learning',
  standalone: true,
  imports: [NgFor, NgIf, LoadingIndicatorComponent, CommonModule, NgTemplateOutlet, ProjectCardComponent],
  templateUrl: './machine-learning.component.html',
  styleUrl: './machine-learning.component.scss'
})
export class MachineLearningComponent implements OnInit {

  baseUrl = environment.apiBaseUrl;

  mlCards: any = ML_CARDS

  constructor(private linkService: LinkService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.populateCards();
  }

  populateCards() {
    this.mlCards.forEach((card: any) => {
      switch (card.type) {
        case 'plot':
          this.linkService.getImages(card.imgLink)
            .subscribe({
              next: (plot: any) => {
                card.plot = plot;
              },
              error: (error: any) => {
                console.log('error populating cards:', error);
              },
              complete: () => { }
            })
          break;
        case 'ModelResult':
          this.linkService.getStrings(card.resultLink)
            .subscribe({
              next: (results: any[]) => {
                card.results = results;
              },
              error: (error: any) => {
                console.log('error populating cards:', error);
              },
              complete: () => { }
            })
          break;
      }
    })
  }

  sanitize(data: any) {
    let url = URL.createObjectURL(data);
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
