import { Component, OnInit } from '@angular/core';
import { TraineeServiceService } from '../trainee-service.service';
import { TraineeDTO } from '../Model/TraineeDTO'
@Component({
  selector: 'app-get-all-trainees',
  templateUrl: './get-all-trainees.component.html',
  styleUrls: ['./get-all-trainees.component.css']
})
export class GetAllTraineesComponent implements OnInit {

  trainees: TraineeDTO[] = [];
  constructor(private traineeservice: TraineeServiceService) {

  }

  ngOnInit(): void {
    this.getAllTrainees();
  }

  getAllTrainees() {
    console.log("hi");
    return this.traineeservice.getAllTrainees().subscribe(data => {
      this.trainees = data;
      console.log(this.trainees);
    }, error => {
      console.log("somthing wrong");
    }
    );

  }
}
