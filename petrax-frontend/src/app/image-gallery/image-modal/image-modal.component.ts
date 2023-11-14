import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageService } from '../image.service';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit {
  baseUrl = 'http://localhost:8080/api/v1/images';
  image: any;

  @Output() imageDeleted = new EventEmitter<void>();

  constructor(private http: HttpClient, 
    public activeModal: NgbActiveModal,
    private imageService: ImageService) { }

  ngOnInit(): void {
  }

  deleteImage(imageId: number): void {
    console.log("Deleting image", imageId);
    this.imageService.deleteImage(imageId).subscribe(
      (response) => {
        console.log("Image deleted", response);
        this.activeModal.close();
        this.imageDeleted.emit();
      },
      (error) => {
        console.error("Error deleting image", error);
      }
    );
  }
}


