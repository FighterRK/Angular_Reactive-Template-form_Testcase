import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reactive-form-app';
  reactiveForm !: FormGroup ;

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      name : new FormControl(null,Validators.required),
      address : new FormControl(null,[Validators.required]),
      email : new FormControl(null,[Validators.required,Validators.email, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]{2,}[.][A-Za-z]{2,}$')]),
      password : new FormControl(null,[Validators.required,Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
      mobile : new FormControl(null,[Validators.required, Validators.pattern("[0-9 ]{10}")]),
      comment: new FormControl('',[Validators.required,Validators.minLength(3) ,Validators.maxLength(10)]),
    })
  }

  onSubmit(){
    console.log(this.reactiveForm);
    if (this.reactiveForm.invalid) {
      alert('Please Fill The Data');
      
    } else {
       alert(JSON.stringify(this.reactiveForm.value,null,4));
       alert('Your Record Has Been Saved');
       

    }
    
  }
}
