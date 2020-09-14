import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'button-app';

  heroes=['Windstorm','Bombasto','Magenta','Tornado'];
   myHero=this.heroes[0];
   yourHero=this.heroes[1];
 // lcount:number=100;
  //dcount:number=25;
 // liketext:string='like-button';
  //disliketext:string='dislike-button';

  /*lcount:number=100;
  dcount:number=25;
  liketext:string='like-button';
  disliketext:string='dislike-button';
*/
  //lcount:number=100;
  //liketext:string='like-button';
   
 /* public incCount(){
    
    if(this.liketext==='like-button'){
      this.liketext='like-button liked';
      this.lcount += 1;
    }
    else{
      this.liketext='like-button'
      this.lcount -= 1;
    }
    if(this.disliketext==='dislike-button disliked'){
      this.dcount-=1;
      this.disliketext='dislike-button';
    }
  }*/

  /*public incCount(){

    if(this.liketext=='like-button')
    {

      this.liketext='like-button liked';
      this.lcount+=1;
    }
    else{

      this.liketext='like-button'
      this.lcount-=1;
    }
    if(this.disliketext=='dislike-button-disliked')
    {

      this.dcount-=1;
      this.disliketext='dislike-button';
    }
  }*/
 // public incCount(){

   // if(this.liketext=='like-button')
    //{

      //this.liketext='like-button liked';
       //this.lcount+=1;
    //}
    //else{

      //this.liketext='like-button';
      //this.lcount-=1;

    //}


  //}
 /* public decCount(){
    if(this.disliketext==='dislike-button'){
      this.disliketext='dislike-button disliked';
      this.dcount += 1;
    }
    else{
      this.disliketext='dislike-button'
      this.dcount -= 1;
   }
    if(this.liketext==='like-button liked'){
      this.lcount-=1;
      this.liketext='like-button';
   }
  }*/
}
