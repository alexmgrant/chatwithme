import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public provider: any;

  constructor(public navCtrl: NavController) {
    this.initGithubProvider();
  }

  private initGithubProvider() {
    this.provider = new firebase.auth.GithubAuthProvider();
    this.provider.addScope('repo');
    this.provider.setCustomParameters({
      'allow_signup': 'false'
    });
  }

  public get login(): any {
    return firebase.auth().signInWithRedirect(this.provider);
  }
}
