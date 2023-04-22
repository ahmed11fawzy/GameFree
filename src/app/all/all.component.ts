import { Component } from '@angular/core';
import { GamesService } from '../games.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
  constructor(private _GamesService:GamesService){}
  loader:boolean=true;
  header:any;
  gameNum:number=20;
  allGames:any[]=[]
  ngOnInit(): void {
    this.header=this._GamesService.headers;
    this._GamesService.getAllGames(this.header).subscribe({
      next:(response)=>{
        this.allGames=response;
        this.loader=false

      }
    })
  }
  addGames(){
    this.gameNum+=8;
  }
}
