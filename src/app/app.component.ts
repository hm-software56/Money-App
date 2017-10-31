import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
//import { HomePage } from '../pages/home/home';
@Component({
  //templateUrl: 'app.html'
  template:' '
})
export class MyApp {
 // rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private iab: InAppBrowser) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
        const browser = this.iab.create('http://dev.cyberia.la/testda/money/web','_self',{location:'no',zoom:'no'}); 
        browser.show();
        splashScreen.hide(); 

        window["plugins"].OneSignal
          .startInit("8611a545-6f5f-4e15-9e3a-b992ae4c6cac", "475492431309")
          .endInit();
            
    });
  }
}
