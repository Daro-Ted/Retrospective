import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { Retrospectivecreatemodel } from '../model/retrospectivecreatemodel';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-createnewretrospective',
  templateUrl: './createnewretrospective.component.html',
  styleUrls: ['./createnewretrospective.component.css']
})
export class CreatenewretrospectiveComponent implements OnInit {
retrospectiveForm : FormGroup;
private createRetrospectiveModel = new Retrospectivecreatemodel();


  constructor(private sharedSerive: SharedService, private router:Router, private  fb: FormBuilder,private dialogRef: MatDialogRef<CreatenewretrospectiveComponent>) { }

  ngOnInit() {
    this.retrospectiveForm = this.fb.group({
      Name:['',[Validators.required]],
      Summary:['',[Validators.required]],
      Participants:['',[Validators.required]],
      Date:['',[Validators.required]]
    })
  }

  CreateNewRetrospective(){
    this.createRetrospectiveModel = this.retrospectiveForm.value;
    this.sharedSerive.CreateRetrospective(this.createRetrospectiveModel).subscribe(o => {
      if(o){
        this.router.navigate(['/retrospective'])
        this.dialogRef.close();
      }
    })
  }

}
