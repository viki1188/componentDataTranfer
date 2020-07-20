import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() childexample1:string;

  childtochildsample1:string;
  @Output() exampleOutput  = new EventEmitter<string>(); 

  constructor() { }

  ngOnInit(): void {


    this.childtochildsample1 = this.childexample1;
    //alert( this.childtochildsample1);
    
  }

  exampleMethodChild(){

    this.exampleOutput.emit(this.childtochildsample1);
  }

}
