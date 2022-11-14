import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  query:any = '';
  queryType:any = 'title';

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    let item = {
      query : this.query,
      queryType : this.queryType
    }
    console.log(item);
    
  }

}
