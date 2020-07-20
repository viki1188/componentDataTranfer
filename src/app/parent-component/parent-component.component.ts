import { Component, OnInit,Input,ViewChild,AfterViewInit } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  parentsample1:string = "Welcome from Parent to child";

  exampleParent:string;

  @ViewChild(Child2Component) childRefrence;

  viewchildExmpleOutput:string;


  constructor() { }

  ngOnInit(): void {
  }

  exampleMethodParent($event){

    this.exampleParent = $event;

  }

  ngAfterViewInit(){

    this.viewchildExmpleOutput = this.childRefrence.viewExampleChild;
  }
  

}
