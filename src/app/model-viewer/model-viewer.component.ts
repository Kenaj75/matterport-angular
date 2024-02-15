import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';

import { MpSdk, setupSdk, SetupSdkOptions } from '@matterport/sdk';


import { SettingsService } from '../services/settings.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'model-viewer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './model-viewer.component.html',
  styleUrls: ['./model-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelViewerComponent {
  private settings = inject(SettingsService);
  @ViewChild("mp") iframe!: ElementRef<HTMLIFrameElement>;


  private _sdk?: MpSdk;
  private get sdk() {
    return this._sdk;
  }
  private set sdk(value: MpSdk | undefined) {
    this._sdk = value;
  }

  private _showIframe = new BehaviorSubject<boolean>(false);
  showIframe$ = this._showIframe.asObservable();

  constructor() {
    combineLatest(
      [
        this.settings.modelId$,
        this.settings.sdkKey$
      ]).subscribe(([modelId, sdkKey]) => {
        if (modelId.length > 5 && sdkKey.length > 5) {
          console.log('setting up sdk', modelId, sdkKey);
          this.iframe.nativeElement.src = `https://my.matterport.com/show/?m=${this.settings.modelId}&play=1&applicationKey=${this.settings.sdkKey}&dh=0&qs=1&brand=1&search=0&hr=0&title=0`;
          this._showIframe.next(true);
          var options: SetupSdkOptions = { iframe: this.iframe.nativeElement, space: modelId };
          setupSdk(sdkKey, options).then(sdk => this.sdk = sdk);
        }
      });
  }
}
