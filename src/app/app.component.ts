import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Covid-19';
  // readonly ROOT_URL = 'https://jsonplaceholder.typicode.com/todos/1';
  posts :any;
  countries :any;
  time = new Date();
  startTime: any;
  searchText: string;
  // products$: Observable<any>;
  constructor(private http: HttpClient){}
  // getPosts(){
  //   this.posts = this.http.get(this.ROOT_URL);
  // }
  ngOnInit() {
    let apiCountries = 'https://corona.lmao.ninja/countries';
    // this.http.get(api).subscribe((response:any)=>{
    //   console.log(response);
    //   this.countries=response;
    // });

    // this.products$ = Observable
    // .interval(1000)
    // .startWith(0).switchMap(() => this.http.get(api).subscribe((response:any)=>{
    //   console.log(response);
    //   this.countries=response;
    // }));

    let apiAll = 'https://corona.lmao.ninja/all';

    this.http.get(apiCountries).subscribe((response:any)=>{
      // console.log(response);
      this.countries=response;
    });
    this.http.get(apiAll).subscribe((response:any)=>{
      // console.log(response);
      this.posts=response;
    });


    setInterval(() => {
      this.time = new Date();
   }, 1000);
   setInterval(() => {
    this.http.get(apiCountries).subscribe((response:any)=>{
      // console.log(response);
      this.countries=response;
    }, () => alert("Service is overwhelmed"));
    this.http.get(apiAll).subscribe((response:any)=>{
      // console.log(response);
      this.posts=response;
    }, () => alert("Service is overwhelmed"));
  }, 5000);
}

  getPosts(){
    let api = 'https://corona.lmao.ninja/all';
    this.http.get(api).subscribe((response:any)=>{
      console.log(response);
      this.posts=response;
    });
  }

  getCountries(){
    this.startTime = new Date();
    let api = 'https://corona.lmao.ninja/countries';
    this.http.get(api).subscribe((response:any)=>{
      console.log(response);
      this.countries=response;
    });
  }
  
  



}
