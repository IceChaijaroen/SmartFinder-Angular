import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  data: any[] = [];
  searchText: any;

  setSearch() {
    this.searchText = '';
  }

  url = 'https://cabinet-api-dev.smartfinder.asia/en-US/api/v1/Property/me?pageNumber=1&pageSize=50';
  url2 = 'https://pokeapi.co/api/v2/pokemon/ditto';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((res: any) => {
      console.log(res.Data)
      this.data = res.Data;
    })
  }

  Logout() {
    localStorage.setItem('Token', '');
    this.router.navigate(["/"]);
  }

}
