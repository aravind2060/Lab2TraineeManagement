import { Component, OnInit } from '@angular/core';
import { TraineeServiceService } from '../trainee-service.service';

@Component({
  selector: 'app-delete-atrainee',
  templateUrl: './delete-atrainee.component.html',
  styleUrls: ['./delete-atrainee.component.css']
})
export class DeleteATraineeComponent implements OnInit {

  id:number;
  constructor(private traineeservice:TraineeServiceService) {

   }

  ngOnInit(): void {
   
  }
 deleteATrainee()
 {
  this.traineeservice.deleteATrainee(this.id);
 }

}
