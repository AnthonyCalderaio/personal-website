import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProjectCardComponent } from '../../templates/project-card/project-card.component';
import { DisplayType } from '../../models/display-type.model';

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
        { title: 'Go to Repo', link:'https://github.com/AnthonyCalderaio/video-notes' },
        { title: 'Go to App', link: 'https://anthonycalderaio.github.io/video-notes/home' }
      ],
      type: 'display'
    } as DisplayType,
    {
      title: 'Virtual Flow',
      img: this.assetsPath + '/virtual-flow.jpg',
      links: [
        {title: 'Go to Repo' , link:'https://github.com/AnthonyCalderaio/virtual-flow_virtual_table'}
      ],
      description: 'VirtualFlow, Boston, MA (Remote) Listed as a co-author on a publication doing pro bono side- work as architect of Angular 9 application. Worked closely with Harvard Ph.D and member of Angular team at Google to visualize and filter-sort thousands (and eventually millions) of Proteins and Ligands specifically to aid Covid-19 research. Publication can be found at this url: https://chemrxiv.org/articles/preprint/A_Multi- Pronged_Approach_Targeting_SARS- CoV-2_Proteins_Using_Ultra- Large_Virtual_Screening/12682316/1',
      type: 'display'
    } as DisplayType
  ]

}
