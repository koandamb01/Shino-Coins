import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShintoService } from '../../shinto.service';

@Component({
  selector: 'app-ledged',
  templateUrl: './ledged.component.html',
  styleUrls: ['./ledged.component.css']
})
export class LedgedComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _shintoService: ShintoService
  ) { }

  ngOnInit() {
  }

}
