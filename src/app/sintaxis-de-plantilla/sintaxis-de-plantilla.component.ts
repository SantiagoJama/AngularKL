import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sintaxis-de-plantilla',
  templateUrl: './sintaxis-de-plantilla.component.html',
  styleUrls: ['./sintaxis-de-plantilla.component.css']
})
export class SintaxisDePlantillaComponent implements OnInit {

  public readonly mainStyles : string = "primary-font-color primary-font-size";
  public applyAllClasses : boolean = false;

  public isMainTitle : boolean = true;


  public paragraphColor : string = " color: yellow;";

  //no requiered
  constructor(){}

  ngOnInit(): void {
    
  }
}
