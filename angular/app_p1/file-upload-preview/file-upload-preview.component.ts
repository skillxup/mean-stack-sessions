import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-file-upload-preview',
  templateUrl: './file-upload-preview.component.html',
  styleUrls: ['./file-upload-preview.component.css']
})
export class FileUploadPreviewComponent implements OnInit {
  imageURL: any;
  uploadForm: FormGroup;

  constructor(
    public fb: FormBuilder
  ) { 
    this.uploadForm = this.fb.group({
      avatar: [null], 
      name: [""]
    })
  }

  ngOnInit() {
  }

  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    
    this.uploadForm.patchValue({
      avatar: file
    });
    
    this.uploadForm.get("avatar").updateValueAndValidity();

    // file preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }

    reader.readAsDataURL(file);
  }

  submit() {
    console.log(this.uploadForm.value);
  }

}
