import { Injectable } from '@angular/core';

import { Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class FilmsService {
  serviceUrl = "https://swapi.co/api/films/";
  results = [];
  chars=[];

  constructor(private http: Http) { }

  getFilms(){
    this.http.get(this.serviceUrl)
    .map(function(response){
      return response.json().results;
    })
    .subscribe((tasks: Array<any>) => {
      let results:Array<any> = [];
      tasks.forEach((task) => {
        results.push(task.characters);
      });
      results.forEach((result) => {
        result.forEach((res) => {
          let url = res.replace("http", "https");
          this.http.get(url)
          .map(function(response){

            return response.json();
          })
          .subscribe((tasks: Array<any>) => {
            this.chars.push(tasks);
          });
        });
      });
    });
    return this.chars;
  }


}
