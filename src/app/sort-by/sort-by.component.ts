import { Game } from './../game';
import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css']
})
export class SortByComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute,private _GamesService:GamesService){}
  sortName:any;
  header:any;
  gameNum:number=20;
  loader:boolean=false;
  allSortedGames:Game[]=[]
ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((param)=>{
      this.sortName=param.get('name');
    })
    this.loader=true
    this.header=this._GamesService.headers;
    this._GamesService.sortGames(this.header,this.sortName).subscribe({
      next:(Response)=>{
        this.allSortedGames=Response;
        this.loader=false
      }
    })
}
addGames(){
  this.gameNum+=8;
}
}
