import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-selector',
  templateUrl: './list-selector.component.html',
  styleUrls: ['./list-selector.component.scss']
})
export class ListSelectorComponent implements OnInit {

  public listelements = [
    {
      name: "google",
      id: 0,
    },
    {
      name: "twitter",
      id: 1,
    },
    {
      name: "facebook",
      id: 2,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
