import { Component, OnInit} from '@angular/core';
import { CommonModule, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { LoadingIndicatorComponent } from '../../widgets/loading-indicator/loading-indicator.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ProjectCardComponent } from '../../templates/project-card/project-card.component';
import { LinkService } from '../../services/link.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-machine-learning',
  standalone: true,
  imports: [NgFor, NgIf, LoadingIndicatorComponent, CommonModule, NgTemplateOutlet, ProjectCardComponent],
  templateUrl: './machine-learning.component.html',
  styleUrl: './machine-learning.component.scss'
})
export class MachineLearningComponent implements OnInit {

  baseUrl = environment.apiBaseUrl;

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
      title: 'Fake or Not',
      description: 'Enter a comment for an item and the trained model will tell you if its fake or not.',
      plot: undefined,
      id: 'fake_or_not_single',
      type: 'input'
    },
    {
      title: 'Fake or Not (Bulk)',
      description: 'Enter a CSV file where one column is \'review\'s. of all strings. This will output a column of \'fake\' with the value of 0 for real and 1 for fake.',
      plot: undefined,
      id: 'fake_or_not_bulk',
      type: 'upload'
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
