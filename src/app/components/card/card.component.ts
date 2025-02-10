import { Component, inject, Input, OnInit } from '@angular/core';
import { card } from '../../Model/card.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

  sanitizer = inject(DomSanitizer)
  @Input() data!:card 
  

  
  ngOnInit() {
    
  }

  svgToHtml(svg:any){
    return this.sanitizer.bypassSecurityTrustHtml(svg)
  }


}
