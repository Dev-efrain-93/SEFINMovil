import { Component, ViewEncapsulation } from '@angular/core';

import { Platform, PopoverController } from '@ionic/angular';

import { AcercaPopoverPage } from '../acerca-popover/acerca-popover';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'page-acerca',
  templateUrl: 'acerca.html',
  styleUrls: ['./acerca.scss'],
})
export class AcercaPage {
  appName: string;
  versionNumber: string;
  backbuttonSubscription: any;

  constructor(
    public popoverCtrl: PopoverController,
    private storage: Storage,
    private router: Router,
    private appVersion: AppVersion,
    public platform: Platform
    ) {

      this.appVersion.getAppName().then(value => {
        this.appName = value;
      }).catch(err => {
        console.log(err);
        this.appName = 'SEFIN Móvil';
      });

      this.appVersion.getVersionNumber().then(value => {
        this.versionNumber = value;
      }).catch(err => {
        console.log(err);
        this.versionNumber = '0.0.x';
      });
    }

    public ionViewDidEnter() {
      this.backbuttonSubscription = this.platform.backButton.subscribe(() => {
        this.router.navigateByUrl('/app/tabs/inicio');
      });
  
    }
  
    public ionViewWillLeave() {
      this.backbuttonSubscription.unsubscribe();
    } 

    async presentPopover(event: Event) {
      const popover = await this.popoverCtrl.create({
        component: AcercaPopoverPage,
        event: event
      });
      await popover.present();
    }

    openTutorial() {
      this.storage.set('ion_did_tutorial', false);
      this.router.navigateByUrl('/tutorial');
    }
}
