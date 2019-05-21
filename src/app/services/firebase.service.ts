import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { CountdownService } from './countdown.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private countdownService: CountdownService) { }

  uploadImage(image) {
    let time = this.countdownService.time; 
    let randomString = this.makeRandomString(10); 
    let imageName = time + '-' + randomString; 

    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref(); 
      let imageRef = storageRef.child('image').child(imageName); 

      imageRef.putString(image, 'base64', { contentType: 'image/jpeg' }).then(snapshot => {
        resolve(snapshot.downloadURL)
      }, err => {
        reject(err);
      })
    })
  }

  makeRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
