import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProjectCardComponent } from '../../templates/project-card/project-card.component';
import { DisplayType } from '../../models/display-type.model';
import { UI_CARDS } from './cards';

@Component({
  selector: 'app-ui-view',
  standalone: true,
  imports: [NgFor, ProjectCardComponent],
  templateUrl: './ui-view.component.html',
  styleUrl: './ui-view.component.scss'
})
export class UiViewComponent {
  @ViewChild('reusableCardTemplate') reusableCardTemplate!: TemplateRef<any>;
  assetsPath = '../../../assets';
  uiCards = UI_CARDS;
}
