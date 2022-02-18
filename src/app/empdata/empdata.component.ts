import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-empdata',
  templateUrl: './empdata.component.html',
  styleUrls: ['./empdata.component.css']
})
export class EmpdataComponent implements OnInit {
  
    newData : any;
    public show:boolean = false;
    public buttonName:any = 'Show';

  constructor(private datastore : DataStoreService) { }

  toggleClick(){
    this.show = !this.show;
    if(this.show){
      this.buttonName = "Hide";
    }
    else{
      this.buttonName = "Show";
    }
}

  // getData() {
  //     this.datastore.fetchData()
  //         .subscribe(data => {
  //             this.newData = data;
  //         });
  // }

  ngOnInit(): void {
   this.datastore.fetchData().subscribe(newData => this.newData = newData);
  // this.getData();
  }
}
