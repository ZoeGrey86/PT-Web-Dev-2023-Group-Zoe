import { Component, OnInit } from '@angular/core';
import { ImageService } from './image.service';
import { AddImageComponent } from './add-image/add-image.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageModalComponent } from './image-modal/image-modal.component';


@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  images: any[]=[];

  constructor(private imageService: ImageService, private modalService: NgbModal)
   {}

  ngOnInit(): void {
    this.loadImages();
  }

  openAddImageModal(): void{
    this.modalService.open(AddImageComponent, {size: 'md'});
  }
  openImageModal(image: any): void{
    const modalRef = this.modalService.open(ImageModalComponent, {size: 'lg'});
    modalRef.componentInstance.image = image;
    modalRef.componentInstance.imageDeleted.subscribe(() => {
      this.loadImages();
    });
  }

    loadImages(): void {
    this.imageService.getImages().subscribe(
      (data) => {
        this.images = data;
      },
      (error) => {
        console.error('Error loading images', error);
      }
    );
  }

}
