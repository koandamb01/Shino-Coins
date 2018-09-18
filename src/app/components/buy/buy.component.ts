import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShintoService } from '../../shinto.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  currentShinto: any;
  message: any;
  constructor(
    private _shinoService: ShintoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.message = "";
    this.currentShinto = this._shinoService.getShinoCoins()
    console.log('shinto: ' + JSON.stringify(this.currentShinto));
  }

  buyCoins() {
    this.currentShinto = this._shinoService.buy();
  }
}
