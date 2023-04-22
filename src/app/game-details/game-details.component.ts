import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import {Game} from '../game'

import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute,private _GamesService:GamesService){}
  header:any;
  loader:boolean=true;
  gameId:any;
  playVideo:boolean=true;
  gameDetails:Game=
  {
    id: 0,
  title: '',
  thumbnail: '',
  status: '',
  short_description: '',
  description: '',
  game_url: '',
  genre: '',
  platform: '',
  publisher: '',
  developer: '',
  release_date: '',
  freetogame_profile_url: '',
  minimum_system_requirements:{
    os: '',
  processor: '',
  memory: '',
  graphics: '',
  storage: '',
  } ,
  screenshots: [
    {
      id: 0,
      image: ""
    }


  ]
  };
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe((param)=>{
        this.gameId=param.get('id');
      })
      this.header=this._GamesService.headers;

      this._GamesService.getSpecificGame(this.header,this.gameId).subscribe({
        next:(response)=>{
          console.log(response)
          this.loader=false
          this.gameDetails=response;
        }
      })

  }
  onPlayVideo(){
    this.playVideo=false
    console.log('hola',this.playVideo)
  }
  onPlayOffVideo(){
    this.playVideo=true
    console.log('bye')
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },

    },

  }
}

