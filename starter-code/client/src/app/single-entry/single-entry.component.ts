import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../services/journal.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  singleEntry:any;
  constructor(
    public router:Router,
    public journal:JournalService,
    public route:ActivatedRoute) {
      route.params.subscribe(params => {
        this.journal.getEntryByID(params['id'])
          .subscribe(entrada => this.singleEntry = entrada);
      })
    }

  ngOnInit() {
  }

}
