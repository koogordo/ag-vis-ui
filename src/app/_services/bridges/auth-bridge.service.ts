import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthBridgeService {
  public switch: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() {}
}
