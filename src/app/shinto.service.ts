import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShintoService {
  ShintoCoins: any;
  constructor() {
    this.ShintoCoins = {
      status: false,
      userValue: 0,
      ShintoCoins: 1,
      ledged: []
    }
  }

  ngOnInit() {

  }

  getShinoCoins() {
    return this.ShintoCoins;
  }

  mine(userAnswer) {
    if (userAnswer == 13) {
      this.ShintoCoins.status = true;
      this.ShintoCoins.ShintoCoins += 1;
      let action = {
        action: "Mined",
        amount: 1,
        value: this.ShintoCoins.ShintoCoins
      }
      this.ShintoCoins.ledged.push(action);
    }
    return this.ShintoCoins;
  }

  buy() {
    this.ShintoCoins.ShintoCoins += 1;
    if (this.ShintoCoins.userValue < 1) {
      this.ShintoCoins.userValue = 0;
    } else {
      this.ShintoCoins.userValue -= 1;
    }

    let action = {
      action: "Bought",
      amount: 1,
      value: this.ShintoCoins.ShintoCoins
    }
    this.ShintoCoins.ledged.push(action);
    return this.ShintoCoins;
  }

  sell() {
    if (this.ShintoCoins.userValue < 1) {
      return this.ShintoCoins;
    } else {

      if (this.ShintoCoins.ShintoCoins < 1) {
        this.ShintoCoins.ShintoCoins = 0;
      } else {
        this.ShintoCoins.ShintoCoins -= 1;
      }

      if (this.ShintoCoins.userValue < 1) {
        this.ShintoCoins.userValue = 0;
      } else {
        this.ShintoCoins.userValue -= 1;
      }

      let action = {
        action: "Sold",
        amount: 1,
        value: this.ShintoCoins.ShintoCoins
      }
      this.ShintoCoins.ledged.push(action);
      return this.ShintoCoins;
    }
  }
}
