import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _sdkKey : BehaviorSubject<string> = new BehaviorSubject<string>('');
  public sdkKey$ = this._sdkKey.asObservable();
  public set sdkKey(value: string) {
    this._sdkKey.next(value);
  }
  public get sdkKey() {
    return this._sdkKey.value;
  }

  private _modelId : BehaviorSubject<string> = new BehaviorSubject<string>('');
  public modelId$ = this._modelId.asObservable();
  public set modelId(value: string) {
    this._modelId.next(value);
  }
  public get modelId() {
    return this._modelId.value;
  }
}
