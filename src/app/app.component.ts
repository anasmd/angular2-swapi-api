import { Component, OnInit } from '@angular/core';
import { FilmsService } from "./films.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  results:any;
  constructor(private filmsService: FilmsService ) { }

  ngOnInit() {
    this.results = this.filmsService.getFilms();
  }
}
