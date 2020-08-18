import { Component, OnInit } from '@angular/core';
import {Person} from '../../models/Person'
import { faCoffee,faBong,faBolt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bmi-chart',
  templateUrl: './bmi-chart.component.html',
  styleUrls: ['./bmi-chart.component.css']
})
export class BmiChartComponent implements OnInit {
  public faCoffee = faCoffee;
  public faBong = faBong;
  public faBolt = faBolt;
  public person : Person;
  public people : Person[]= [];
  constructor() { }

  ngOnInit(): void {
    this.person = new Person(75,175);
    const p1 = new Person(70,175);
    const p2= new Person(60,175);
    const p3 = new Person(85,175);
    this.people.push(p1,p2,p3)
  }

}
