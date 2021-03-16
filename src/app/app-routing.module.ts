import { AddStudentComponent } from './pages/add-student/add-student.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'student-list', component: StudentListComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: '',   redirectTo: '/student-list', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
