import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  public rootPage: any = TabsPage;
  public provider: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.initGithubProvider();
  }

  private initGithubProvider() {
    this.provider = new firebase.auth.GithubAuthProvider();
    this.provider.addScope('repo');
    this.provider.setCustomParameters({
      'allow_signup': 'false'
    });
  }

  public login(): any {
    return firebase.auth().signInWithRedirect(this.provider);
  }
}
