import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public async getLocation() {    
      const coordinates = await Geolocation.getCurrentPosition();
      console.log(coordinates);
  }

  public async requestPermissions() {
    const permissions = await Geolocation.requestPermissions();
    console.log(permissions);
  }

  public async checkPermissions() {
    const permissions = await Geolocation.checkPermissions();
    console.log(permissions);
  }

}
