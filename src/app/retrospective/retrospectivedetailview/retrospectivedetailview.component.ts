import { SharedService } from './../service/shared.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Feedbackmodel } from './../model/feedbackmodel';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Retrospectivereadmodel } from '../model/retrospectivereadmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retrospectivedetailview',
  templateUrl: './retrospectivedetailview.component.html',
  styleUrls: ['./retrospectivedetailview.component.css']
})
export class RetrospectivedetailviewComponent implements OnInit {
  private feedback  = new Feedbackmodel();
  retrospective: Retrospectivereadmodel
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router, private sharedService: SharedService,private dialogRef: MatDialogRef<RetrospectivedetailviewComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.retrospective=this.data;

    this.feedbackForm = this.fb.group({
    Name: ['',[Validators.required]],
    Body: ['',[Validators.required]],
    Types: ['',[Validators.required]],
  })
  }

  CreateFeedback(retrospectiveId: number){
    console.log(retrospectiveId)
    this.feedback = this.feedbackForm.value;
    this.sharedService.CreateFeedback(retrospectiveId, this.feedback).subscribe( f => {
      if(f){
        this.router.navigate(['/retrospective'])
        this.dialogRef.close();
      }
    });
  }

}
