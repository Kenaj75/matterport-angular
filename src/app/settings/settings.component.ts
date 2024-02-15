import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'settings',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule
    ],
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  service = inject(SettingsService);
}
