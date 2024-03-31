import { Component, OnInit} from '@angular/core';
import { CommonModule, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { LoadingIndicatorComponent } from '../../widgets/loading-indicator/loading-indicator.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ProjectCardComponent } from '../../templates/project-card/project-card.component';
import { LinkService } from '../../services/link.service';

@Component({
  selector: 'app-machine-learning',
  standalone: true,
  imports: [NgFor, NgIf, LoadingIndicatorComponent, CommonModule, NgTemplateOutlet, ProjectCardComponent],
  templateUrl: './machine-learning.component.html',
  styleUrl: './machine-learning.component.scss'
})
export class MachineLearningComponent implements OnInit {
  local = true;
  baseUrl = this.local ? 'http://127.0.0.1:5000' : 'https://ml-api-5igq.onrender.com';

  mlCards: any = [
    {
      title: 'NVIDIA Stock Predictor',
      imgLink: this.baseUrl + '/nvidia_prediction',
      description: 'Random Forest alrorithm to predict the cost of the NVIDA stock price today. ',
      plot: undefined,
      id: 'nvidia_stock_predictor',
      type: 'display'
    },
    {
      title: 'Fake or not',
      description: 'Enter a comment for an item and the trained model will tell you if its fake or not.',
      plot: undefined,
      id: 'fake_or_not',
      type: 'input'
    }
  ]

  constructor(private linkService: LinkService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.populateCards();
  }

  populateCards() {
    this.mlCards.forEach((card: any) => {
      this.linkService.getPlot(card.imgLink)
        .subscribe({
          next: (plot: any) => {
            card.plot = plot;
          },
          error: (error: any) => {
            console.log('error populating cards:', error);
          },
          complete: () => { }
        })
    })
  }
  sanitize(data: any) {
    let url = URL.createObjectURL(data);
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
