import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {
  selectedFile: File;
  baseUrl = 'http://localhost:8080/api/v1/images';

  onFileSelected(event: Event): void{
    this.selectedFile = (event.target as HTMLInputElement).files[0];
    console.log('Selected file: ',this.selectedFile);
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  

  uploadFile(): void{
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    console.log(this.selectedFile);
    
    this.http.post(`${this.baseUrl}/upload`, formData).subscribe(
      (response) => {
        console.log("File uploaded",response);
      },  
      (error) => {
        console.error("error uploading file", error);
      }
    );
  }

}
