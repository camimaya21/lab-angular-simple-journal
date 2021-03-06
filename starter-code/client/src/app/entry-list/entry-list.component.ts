import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../services/journal.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

entry:Array<any> = [];
  constructor(public journal:JournalService ) {
    this.journal.getEntryList().subscribe( list =>{
        this.entry = list;
        });
        console.log(this.entry);
  }

  ngOnInit() {
  }

}
