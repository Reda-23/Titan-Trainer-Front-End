import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../models/Client";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-client',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{

  client! : Client;

  constructor(private clientService : ClientService) {

  }


  ngOnInit(): void {
    this.clientService.getClientById(1).subscribe((data)=>{
      console.log(data)
      this.client  = data;
    });

  }

}
