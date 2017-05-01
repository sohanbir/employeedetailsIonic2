import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CallNumber} from '@ionic-native/call-number';
import {GoogleMap , GoogleMaps , LatLng, CameraPosition, GoogleMapsEvent} from '@ionic-native/google-maps';
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class Details {
info : any;
phoneNumber : number;
personal = {"fullName":"Sohan Choudhary", "email":"xysd@gmail.com", "address":"wakad"};
constructor(public navCtrl: NavController, public navParams: NavParams, private call : CallNumber, public googleMaps:GoogleMaps) {
  this.info = this.navParams.get('value')
  }

async callNumber(): Promise <any> {
try {
  await this.call.callNumber(String(this.phoneNumber),true);
}
catch(e){
  console.error(e);
} }
ngAfterViewInit(){
  this.loadMap();
}
loadMap(){
  let element = document.getElementById('map');
  let map : GoogleMap = this.googleMaps.create(element,{});
  let latlng = new LatLng (this.info.long , this.info.lati);

  map.one(GoogleMapsEvent.MAP_READY).then(()=>
{
  let position : CameraPosition = {
    target : latlng,
    zoom :10,
    tilt:30
  }
  map.moveCamera(position);
}

)}
}
