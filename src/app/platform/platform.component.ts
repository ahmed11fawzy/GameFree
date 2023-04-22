import { Game } from './../game';
import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {
  constructor(private _GamesService:GamesService,private _ActivatedRoute:ActivatedRoute){}
  specificGames:Game[]=[];
  header:any;
  loader:boolean=true;
  gameNum:number=20;
  platformName:any;
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe((param)=>{
        this.platformName=param.get('name');
      })
      this.header=this._GamesService.headers;
      this._GamesService.getGamesOnSpecificPlatform(this.header,this.platformName).subscribe({
        next:(response)=>{
          this.specificGames=response;
          this.loader=false;
        }
      })
  }
  addGames(){
    this.gameNum+=8;
  }
}
