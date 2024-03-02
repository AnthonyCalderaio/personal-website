import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingIndicatorComponent } from '../../widgets/loading-indicator/loading-indicator.component';

@Component({
  selector: 'app-machine-learning',
  standalone: true,
  imports: [NgFor, NgIf, LoadingIndicatorComponent],
  templateUrl: './machine-learning.component.html',
  styleUrl: './machine-learning.component.scss'
})
export class MachineLearningComponent implements OnInit {

  mlCards: any = [
    {
      title: 'NVIDIA Stock Predictor',
      img: '',
      link: 'https://ml-api-5igq.onrender.com/nvidia_prediction',
      description: 'Random Forest alrorithm to predict the cost of the NVIDA stock price today. Based on my model, todays price should be:'
    }
  ]
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.populateCards();
  }

  populateCards() {
    this.mlCards.forEach((card: any) => {
      this.getPrediction(card.link)
        .subscribe((prediction: any) => {
          card['response'] = prediction
        })
    })
  }

  getPrediction(url: string): Observable<any> {
    return this.httpClient.get(url)
  }
  
}
