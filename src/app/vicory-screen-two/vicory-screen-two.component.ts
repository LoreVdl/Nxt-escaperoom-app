import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx"
import { FirebaseService } from '../services/firebase.service';
import { CountdownService } from '../services/countdown.service';

@Component({
  selector: 'app-vicory-screen-two',
  templateUrl: './vicory-screen-two.component.html',
  styleUrls: ['./vicory-screen-two.component.scss'],
})
export class VicoryScreenTwoComponent implements OnInit {
  public picture: string = null; 

  constructor(private camera: Camera, private firebaseService: FirebaseService, private countdownService: CountdownService) { }

  ngOnInit() {
    this.countdownService.endGame(); 
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100, 
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG, 
      mediaType: this.camera.MediaType.PICTURE, 
      sourceType: this.camera.PictureSourceType.CAMERA
    }

    this.camera.getPicture(options).then(imageData => {
      this.picture = imageData;

      if (this.picture) {
        this.uploadPicture();
      } 
    }, (err) => {
      
    })
  }

  uploadPicture() {
    this.firebaseService.uploadImage(this.picture); 
  }

}
