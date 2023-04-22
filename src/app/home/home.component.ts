import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _GamesService:GamesService){}
  loader:boolean=true;
  header:any;
  allGames:any[]=[]
  ngOnInit(): void {
    this.header=this._GamesService.headers;
    this._GamesService.getAllGames(this.header).subscribe({
      next:(response)=>{
        this.allGames=response;
        this.loader=false;
        ;
      }
    })
  }

}
