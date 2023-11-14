import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit {
  baseUrl = 'http://localhost:8080/api/v1/images';
  image: any;

  constructor(private http: HttpClient, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  deleteImage(imageId: number): void {
    this.http.delete(`${this.baseUrl}/${imageId}`).subscribe(
      (response) => {
        console.log("Image deleted", response);
        this.activeModal.close();
      },
      (error) => {
        console.error("Error deleting image", error);
      }
    );
  }
}


