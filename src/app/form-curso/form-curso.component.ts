import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Cursos } from './../models/cursos';
import { CursosService } from './../services/cursos.service';
import { ActivatedRoute } from '@angular/router';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent implements OnInit {

  curso: Cursos;

  cursoID: number;

  //@ViewChild('nome', {static:true}) nomeRecebido: NgModel;

  constructor(private cursoService: CursosService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.curso = new Cursos();
    this.route.params.subscribe(params => this.cursoID = params['id']);
    this.onUpdate();
  }

  onSubmit(curso){

    if(curso.id == null){
      this.cursoService.saveCurso(curso).subscribe();
    }else {
      this.cursoService.editarCurso(curso).subscribe();
    }
    
    this.curso = new Cursos();

  }

  onUpdate(){

    this.cursoService.getCurso(this.cursoID).subscribe(dados => this.curso = dados);

  }

}
