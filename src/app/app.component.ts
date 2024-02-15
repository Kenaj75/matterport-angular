import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModelViewerComponent } from './model-viewer/model-viewer.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ModelViewerComponent,
    SettingsComponent
  ],
  providers: [
    SettingsService
  ]
})
export class AppComponent {
  title = 'matterport-angular';
}
