import { Component, OnInit } from '@angular/core';
import { TraineeDTO } from 'src/app/Model/TraineeDTO';
import { TraineeServiceService } from '../trainee-service.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-update-atrainee',
  templateUrl: './update-atrainee.component.html',
  styleUrls: ['./update-atrainee.component.css']
})
export class UpdateATraineeComponent implements OnInit {

  trainee:TraineeDTO=new TraineeDTO();
  id:number;
  constructor(private traineeService:TraineeServiceService) {
    console.log("update a trainee");
  }

  ngOnInit(): void {
    console.log("update a trainee");
  }

  updateATrainee()
  {
      this.traineeService.updateATrainee(this.trainee);
  }
  getTraineeforupdate()
  {
    this.traineeService.getATrainee(this.id).subscribe(data=>
      {
        this.trainee=data;
        console.log(this.trainee);
      },error=>
      {
       console.log("error getting");
      }
      );
  }

}
