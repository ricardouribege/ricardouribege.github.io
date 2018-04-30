import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lat: any;
  long: any;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

  }

  ionViewDidLoad(){
    //this.geolocation.getCurrentPosition().then( pos => {
    //  this.lat = pos.coords.latitude;
    //  this.long = pos.coords.longitude;
    //  console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
    //})
  }


}
