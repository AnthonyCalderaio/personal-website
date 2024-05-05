import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-loading-indicator',
  standalone: true,
  imports: [NgIf],
  templateUrl: './loading-indicator.component.html',
  styleUrl: './loading-indicator.component.scss'
})
export class LoadingIndicatorComponent implements OnInit {
  @Input() loading: boolean = false;

  loadingVerbiage = 'Loading';

  ngOnInit() {
    this.loadingVerbiage = this.loadingVerbiage + '.';
    interval(500).subscribe(() => {
      if (this.loadingVerbiage.includes('...')) {
        this.loadingVerbiage = 'Loading';
      } else {
        this.loadingVerbiage = this.loadingVerbiage + '.';
      }
    })
  }



}
