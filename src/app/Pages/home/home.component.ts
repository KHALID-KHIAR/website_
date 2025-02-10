import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { HeaderComponent } from "../../components/header/header.component";
import { dataCards } from "./data-cards"

@Component({
  selector: 'app-home',
  imports: [CardComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  data = dataCards
 
  hide_animation(event:any){
    this.fadeOut("#welcome_div")
    this.fadeIn(".cards_container")
  }



   fadeOut(elt:any){
		let item = document.querySelector(elt)
		item.style.opacity=1
		let opacity = 1
		let interval = setInterval(function(){
			opacity-=0.1
			item.style.opacity=opacity
			if(opacity<=0){
			clearInterval(interval)
			item.style.display = 'none' ;
			}
		},50)
		}

     fadeIn(elt:any){
      let item = document.querySelector(elt)
        item.style.opacity = 0;
        item.style.display = "grid";
        let opacity = 0;
        const interval = setInterval(function() {
        opacity += 0.1;
        item.style.opacity = opacity.toString();
        if (opacity >= 1) {
        clearInterval(interval);
        }
    }, 50);
      }

}
