import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UiViewComponent } from './views/ui-view/ui-view.component';
import { MachineLearningComponent } from './views/machine-learning/machine-learning.component';

export const routes: Routes = 
[
  { path: '', component: HomeComponent },
  { path: 'ui', component: UiViewComponent },
  { path: 'machine-learning', component: MachineLearningComponent },
];
