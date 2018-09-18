import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShintoService } from '../../shinto.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

  currentShinto: any;
  answer: any;
  message: any;
  constructor(
    private _shinoService: ShintoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.message = "";
    this.currentShinto = this._shinoService.getShinoCoins()
  }

  checkMine() {
    this.currentShinto = this._shinoService.mine(this.answer);
    if (this.currentShinto.status == false) {
      this.message = "Nice try but wrong answer. Please try again!";
    } else {
      this.message = "Great Job, The ShinoCoins increase by 1";
    }
    this.answer = "";
    this.currentShinto.status = false;
  }
}
