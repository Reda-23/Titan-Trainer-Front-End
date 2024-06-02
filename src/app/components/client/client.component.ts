import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../interfaces/Client";
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
      this.client  = data;
      console.log(this.client)
    });

  }

}
