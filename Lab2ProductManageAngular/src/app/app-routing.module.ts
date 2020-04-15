import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddATraineeComponent } from './add-atrainee/add-atrainee.component';
import { GetATraineeComponent } from './get-atrainee/get-atrainee.component';
import { GetAllTraineesComponent } from './get-all-trainees/get-all-trainees.component';
import { DeleteATraineeComponent } from './delete-atrainee/delete-atrainee.component';
import { UpdateATraineeComponent } from './update-atrainee/update-atrainee.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [
  { path: "addatrainee", component: AddATraineeComponent },
  { path: "getatrainee", component: GetATraineeComponent },
  { path: "getalltrainees", component: GetAllTraineesComponent },
  { path: "deleteatrainee", component: DeleteATraineeComponent },
  { path: "updateatrainee", component: UpdateATraineeComponent },
  { path: "**", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
