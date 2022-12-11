import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Alejandro's Life";
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://wallpapercave.com/wp/wc1689357.jpg';
  image3 = 'https://scontent-ord5-2.xx.fbcdn.net/v/t31.18172-8/11901452_461132560739567_3926346404217943803_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=z7TJO6z6RqkAX8ex0Jq&tn=ybGgOE-nXjFQO7Wg&_nc_ht=scontent-ord5-2.xx&oh=00_AfA_mXf2HHwNbWc06sjRDTFcOohMjNuGX2y4gJEhYnWiEQ&oe=63BCAB2A';

  constructor() { }

  ngOnInit() {
  }

}