import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProjectCardComponent } from '../../templates/project-card/project-card.component';

@Component({
  selector: 'app-ui-view',
  standalone: true,
  imports: [NgFor, ProjectCardComponent],
  templateUrl: './ui-view.component.html',
  styleUrl: './ui-view.component.scss'
})
export class UiViewComponent {
  @ViewChild('reusableCardTemplate') reusableCardTemplate!: TemplateRef<any>;
  assetsPath = '../../../assets'
  uiCards = [
    {
      title: 'Video Notes',
      img: this.assetsPath + '/video-note.jpg',
      link: 'https://anthonycalderaio.github.io/video-notes/home', 
      description: 'Browser based application written in Angular 16, and Electron. This application is an offline video annotater. Just upload a video into the uploader then select your vidoe in the video section and add a note to any point in the video. V1 includes memory persistence.',
      links: [
        { title: 'github', link:'https://github.com/AnthonyCalderaio/video-notes' },
        { title: 'preview', link: 'https://anthonycalderaio.github.io/video-notes/home' }
      ]
    }]

}
