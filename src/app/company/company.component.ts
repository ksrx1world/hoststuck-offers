import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  hproviderForm = new FormGroup(
    {
      hprovider: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      rating: new FormControl('', [Validators.required])
    }
  );

  get hprovider(){ return this.hproviderForm.get('hprovider') };
  get description() {return this.hproviderForm.get('description')};
  get rating() {return this.hproviderForm.get('rating')};

  constructor() { }
  
  collectdata(){
    console.log(this.hproviderForm.value)
  }



  ngOnInit(): void {
  }

}
