import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(private _AuthService:AuthService){}
  isLogIn:boolean=false;
  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next:()=>{
        if(this._AuthService.userData.getValue()!==null){
          this.isLogIn=true
        }
        else{
          this.isLogIn=false;
        }
      }
    })

  }
  logOut(){
    this._AuthService.logOut();
  }

  pcPlatform:string='pc';
  browserPlatform:string='browser';
  sortsArr:string[]=['release-date','popularity','alphabetical','relevance'];
  allCategories:string[]=['racing',
                  'sports',
                  'social',
                  'shooter',
                  'open-world',
                  'zombie',
                  'fantasy',
                  'action-rpg',
                  'action',
                  'flight',
                  'battle-royale'
    ]
}
