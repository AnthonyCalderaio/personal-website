import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';
import { LoadingIndicatorComponent } from '../../widgets/loading-indicator/loading-indicator.component';
import { HttpClient } from '@angular/common/http';
import { LinkService } from '../../services/link.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet, LoadingIndicatorComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @ViewChild('cardInput') cardInput: ElementRef;
  @Input() cardData: any;
  @Input() cardType: string;

  responseData$: Observable<any>;

  constructor(private httpClient: HttpClient, public linkService: LinkService){ }

  @Input() test: any;

  // InputType - get data from api
  fetchData(){
    let inputValue = this.cardInput?.nativeElement?.value;
    if(this.cardData.id === 'fake_or_not'){
      this.responseData$ = this.linkService.sendData({"review":inputValue})
      return;
    }
    this.responseData$ = this.linkService.sendData(inputValue)
  }

}
