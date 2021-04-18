import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  offerForm = new FormGroup(
    {
      hprovider: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      ram: new FormControl('', [Validators.required]),
      vcore: new FormControl('', [Validators.required]),
      bandwidth: new FormControl('', [Validators.required]),
      url :new FormControl('', [Validators.required]),
      rating: new FormControl('', [Validators.required])
    }
  );

  get hprovider(){ return this.offerForm.get('hprovider') };
  get price() {return this.offerForm.get('price')};
  get ram() {return this.offerForm.get('ram')};
  get vcore() {return this.offerForm.get('vcore')};
  get bandwidth() {return this.offerForm.get('bandwidth')};
  get url() {return this.offerForm.get('url')};
  get rating() {return this.offerForm.get('rating')};

  constructor() { }
  
  collectdata(){
    console.log(this.offerForm.value)
  }

  ngOnInit(): void {
  }

}
