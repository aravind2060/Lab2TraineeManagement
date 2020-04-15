import { Component, OnInit } from '@angular/core';
import { TraineeDTO } from 'src/app/Model/TraineeDTO';
import { TraineeServiceService } from '../trainee-service.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-get-atrainee',
  templateUrl: './get-atrainee.component.html',
  styleUrls: ['./get-atrainee.component.css']
})
export class GetATraineeComponent implements OnInit {

  id: number;
  trainee: TraineeDTO;
  constructor(private traineeService: TraineeServiceService) {
  }

  ngOnInit(): void {
  }

  getATrainee() {
    this.traineeService.getATrainee(this.id).subscribe(data => { this.trainee = data; console.log(this.trainee); });
  }

}
