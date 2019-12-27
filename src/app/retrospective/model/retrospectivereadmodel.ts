import { Feedbackmodel } from './feedbackmodel';
export class Retrospectivereadmodel {
    Id:number;
    Name:string;
    Summary:string;
    Date:Date;
    Participants:string;
    Feedbacks: Feedbackmodel[] = [];
}
