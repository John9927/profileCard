import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  constructor() { }
  people: any[] = [
    {
      name: "Mario Rossi",
      country: "IT"
    },
    {
      name: "Giovanni Izzi",
      country: "USA"
    },
    {
      name: "Matteo Bianchi",
      country: "UK"
    },
    {
      name: "Marco Verde",
      country: "IT"
    },
  ];

  getColor(country) {
    switch (country) {
      case "IT":
        return "green";
      case "USA":
        return "blue";
      case "UK":
        return "red";
    }
  }


  ngOnInit(): void {
  }

}
