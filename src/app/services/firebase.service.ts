import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { CountdownService } from './countdown.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private countdownService: CountdownService, private database: AngularFirestore) { }

  uploadImage(image) {
    let time = this.countdownService.time; 
    let randomString = this.makeRandomString(10); 
    let imageName = time + '-' + randomString; 

    this.uploadName(imageName); 

    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref(); 
      let imageRef = storageRef.child('image').child(imageName); 

      imageRef.putString(image, 'base64', { contentType: 'image/jpeg' }).then(snapshot => {
        resolve(snapshot.downloadURL)
      }, err => {
        reject(err);
      })
    }); 
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

  uploadName(name) {
    this.database.collection("images").add({
      name: name
    });
  }
}
