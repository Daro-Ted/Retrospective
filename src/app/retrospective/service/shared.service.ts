import { Retrospectivecreatemodel } from './../model/retrospectivecreatemodel';
import { Feedbackmodel } from './../model/feedbackmodel';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Retrospectivereadmodel } from '../model/retrospectivereadmodel';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  retrospectiveUrl = environment.retrospective;
  retrospectiveByDateUrl = environment.retrospectiveByDate;
  retrospectiveCreateUrl = environment.createRetrospective;
  retrospectiveFeedbackUrl = environment.feedback;
  headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  public GetRetrospective():Observable<any[]>{
    return this.http.get<any[]>(this.retrospectiveUrl);
  }

  public GetRetrospectiveByDate(date: string):Observable<Retrospectivereadmodel[]>{
    console.log(date.toString());
    return this.http.get<Retrospectivereadmodel[]>(this.retrospectiveByDateUrl+`${date}`);
  }

  public CreateRetrospective(retrospective: Retrospectivecreatemodel):Observable<any>{
    return this.http.post(this.retrospectiveCreateUrl, retrospective, {} );
  }

  public CreateFeedback(retrospectiveId: number, feedback: Feedbackmodel):Observable<any>{
    return this.http.post(this.retrospectiveFeedbackUrl + retrospectiveId, feedback, {});
  }
}
