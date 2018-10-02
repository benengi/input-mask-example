import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BrMaskerIonic3 } from "brmasker-ionic-3";
import {
  FormControl,
  FormGroup
} from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [BrMaskerIonic3]
})
export class HomePage {
  form: FormGroup;
  rawPhone: any;

  constructor(public navCtrl: NavController, private brMaskerIonic3: BrMaskerIonic3 ) {
    this.form = this.createForm();
  }

  protected createForm(): FormGroup {
    return new FormGroup({
      phone: new FormControl('')
    });
  }

  getRawPhone() {
    this.rawPhone = this.form.get('phone').value.replace(/\D/g,'');
  }
}
