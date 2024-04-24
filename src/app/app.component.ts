import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  windows: any = [];
  title = 'electron';

  @ViewChild('webviewElement') webviewElement!: ElementRef;

  ngAfterViewInit() {
    const webview: HTMLElement = this.webviewElement.nativeElement;
    webview.addEventListener('dom-ready', () => {
      console.log('Webview is loaded and ready.');
    });
  }

  ngOnInit() {

  }
}

// Add this to the same or a different TypeScript file in your project
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'webview': any;
    }
  }
}

//
// {
//   "main": "src/electron/app.js",
//   "name": "electron-test",
//   "version": "0.0.0",
//   "author": "LoLTheory.gg",
//   "scripts": {
//   "ng": "ng",
//     "build": "ng build",
//     "watch": "ng build --watch --configuration development",
//     "test": "ng test",
//     "electron": "ng build --base-href ./ && electron .",
//     "start": "ng build --base-href ./ && electron .",
//     "build:ow-electron": "ow-electron-builder --publish=never"
// },
//   "private": true,
//   "dependencies": {
//   "@angular/animations": "~12.2.0",
//     "@angular/common": "~12.2.0",
//     "@angular/compiler": "~12.2.0",
//     "@angular/core": "~12.2.0",
//     "@angular/forms": "~12.2.0",
//     "@angular/platform-browser": "~12.2.0",
//     "@angular/platform-browser-dynamic": "~12.2.0",
//     "@angular/router": "~12.2.0",
//     "@overwolf/electron-is-overwolf": "^0.0.2",
//     "@overwolf/ow-electron": "^28.2.5",
//     "@overwolf/ow-electron-builder": "^24.13.4",
//     "rxjs": "~6.6.0",
//     "tslib": "^2.3.0",
//     "zone.js": "~0.11.4"
// },
//   "devDependencies": {
//   "@angular-devkit/build-angular": "~12.2.6",
//     "@angular/cli": "~12.2.6",
//     "@angular/compiler-cli": "~12.2.0",
//     "@types/jasmine": "~3.8.0",
//     "@types/node": "^12.11.1",
//     "jasmine-core": "~3.8.0",
//     "karma": "~6.3.0",
//     "karma-chrome-launcher": "~3.1.0",
//     "karma-coverage": "~2.0.3",
//     "karma-jasmine": "~4.0.0",
//     "karma-jasmine-html-reporter": "~1.7.0",
//     "typescript": "~4.3.5"
// }
// }
