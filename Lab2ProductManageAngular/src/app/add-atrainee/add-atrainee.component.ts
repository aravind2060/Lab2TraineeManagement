import { Component, OnInit } from '@angular/core';
import { TraineeDTO } from 'src/app/Model/TraineeDTO';
import { TraineeServiceService } from '../trainee-service.service';

@Component({
  selector: 'app-add-atrainee',
  templateUrl: './add-atrainee.component.html',
  styleUrls: ['./add-atrainee.component.css']
})
export class AddATraineeComponent implements OnInit {

  trainee: TraineeDTO = new TraineeDTO();
  constructor(private traineeservice: TraineeServiceService) {

  }

  ngOnInit(): void {

  }

  addATrainee() {

    console.log("in add component");
    this.traineeservice.addATrainee(this.trainee).subscribe(data => {
      alert("data added");
    }, error => {
      alert("something wrong");
    }
    );
  }

}
