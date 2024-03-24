import { Routes } from '@angular/router';
import {ClientComponent} from "./components/client/client.component";
import {WebShopComponent} from "./components/web-shop/web-shop.component";
import {QrCodeComponent} from "./components/qr-code/qr-code.component";

export const routes: Routes = [

  {path : 'client' , component : ClientComponent},
  {path : 'web-shop' , component : WebShopComponent},
  {path : 'qrcode', component : QrCodeComponent}
];
