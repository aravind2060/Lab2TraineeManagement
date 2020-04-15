import { Injectable } from '@angular/core';
import { TraineeDTO } from './Model/TraineeDTO';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TraineeServiceService {

  url = "http://localhost:8083/";
  constructor(private httpClient: HttpClient) { }

  addATrainee(traineedto: TraineeDTO): Observable<any> {
    console.log(traineedto);
    return this.httpClient.post(this.url + "addatrainee", traineedto, { responseType: 'text' });
  }

  getATrainee(id: number): Observable<any> {
    return this.httpClient.get(this.url + "getatrainee/" + id);
  }

  getAllTrainees(): Observable<any> {
    return this.httpClient.get(this.url + "getalltrainees");
  }

  updateATrainee(traineedto: TraineeDTO) {
    this.httpClient.put(this.url + "updateatrainee", traineedto);
  }

  deleteATrainee(id: number) {
    this.httpClient.delete(this.url + "deleteatrainee/" + id);
  }


}
