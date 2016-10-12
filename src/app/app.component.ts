import { Component } from '@angular/core';

import './rxjs-operators';

import { IftttService } from './ifttt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  errorMessage: string;
  message: string;

  constructor (private iftttService: IftttService) {}

  setWallpaper() {
    this.iftttService.setWallpaper()
                      .subscribe(
                        message => this.message = message,
                        error => this.errorMessage = <any>error);
  }
}
