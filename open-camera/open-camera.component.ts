import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-open-camera',
  templateUrl: './open-camera.component.html',
  styleUrls: ['./open-camera.component.css']
})
export class OpenCameraComponent implements OnInit {
  capturedImage: any;
  @ViewChild('camera', { static: false }) camera: CameraCaptureComponent;

  constructor() { }

  ngOnInit(): void {
  }

  public getCapture(url: string) {
    if (url !== undefined && url !== null) {
      this.capturedImage = url; //image captured can view using this url
    } else {
      alert('Picture is not captured properly, Please retake the picture!');
    }
  }

}
