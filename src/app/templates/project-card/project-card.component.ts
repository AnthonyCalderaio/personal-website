import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LoadingIndicatorComponent } from '../../widgets/loading-indicator/loading-indicator.component';
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
  @Input() cardData: any;
  @Input() cardType!: string;

  responseData$!: Observable<any>;

  uploadedFile: any;

  constructor(public linkService: LinkService) { }

  @Input() test: any;

  // InputType - get data from api
  fetchData() {
    let inputValue = (document.getElementById(this.cardData.id + '-input') as HTMLInputElement).value;
    if (this.cardData.id === 'fake_or_not_single') {
      this.responseData$ = this.linkService.sendData({ "review": inputValue })
      return;
    }
    this.responseData$ = this.linkService.sendData(inputValue)
  }

  onUpload() {
    const formData = new FormData();
    formData.append('file', this.uploadedFile);
    this.linkService.sendCSV(formData)
      .subscribe((data: any) => { this.downloadCSV(data) })
  }

  downloadCSV(data: any) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }

  onChange(event: any) {
    this.uploadedFile = event?.target?.files[0];
  }

}
