import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _HttpClient:HttpClient ) { }

  headers:any={
    headers: {
      'X-RapidAPI-Key': '32f42afe51msha8504fa4fcb37a5p132197jsnea3e7d67f415',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  }



  getAllGames(header:any):Observable<any>
  {
    return this._HttpClient.get(' https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity',header)
  }
  getSpecificGame(header:any,id:any):Observable<any>
  {
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,header)
  }
  getGamesOnSpecificPlatform(header:any,name:string):Observable<any>
  {
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${name}`,header)
  }
  sortGames(header:any,name:string):Observable<any>
  {
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${name}`,header)
  }
  getGamesOfSpecificCategory(header:any,name:string):Observable<any>
  {
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${name}`,header)
  }


}
