import { Game } from './../game';
import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(private _GamesService:GamesService,private  _ActivatedRoute:ActivatedRoute){}
  header:any;
  loader:boolean=true;
  categoryName:any;
  gamesBox:Game[]=[];
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe((param)=>{
        this.categoryName=param.get('name')
      })
      this.header=this._GamesService.headers;
      this._GamesService.getGamesOfSpecificCategory(this.header,this.categoryName).subscribe({
        next:(response)=>{
          this.gamesBox=response;
          this.loader=false;
        }
      })
  }
}
