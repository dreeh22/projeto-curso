import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { FormCursoComponent } from './form-curso/form-curso.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'cursos'},
  {path: 'cursos', component: ListaCursosComponent},
  {path: 'cursos/novo', component: FormCursoComponent},
  {path: 'cursos/editar/:id', component: FormCursoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
