import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  uploadImage(image) {
    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref(); 
      let imageRef = storageRef.child('image').child('imageName'); 

      imageRef.putString(image, 'base64', { contentType: 'image/jpeg' }).then(snapshot => {
        resolve(snapshot.downloadURL)
      }, err => {
        reject(err);
      })
    })
  }
}
