import {Component, OnInit} from '@angular/core';
import {QrCodeService} from "../../services/qr-code.service";
import { NgIf} from "@angular/common";

@Component({
  selector: 'app-qr-code',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.css'
})
export class QrCodeComponent implements OnInit{

  qrCode! : string;


  constructor(private qrService : QrCodeService) {


  }

  ngOnInit(): void {

  }

  generateQRCode() {
    this.qrService.generateQRCodeForClient(1).subscribe((data : ArrayBuffer)=>{
        const reader = new FileReader();
        reader.onload = ()=>{
          this.qrCode = reader.result as string;
        }
        reader.readAsDataURL(new Blob([data]))
    },error=>{
      console.log("error in getting the qrcode from the backend ",error);
    })

  }
}
