import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Cursos } from './../models/cursos';
import { CursosService } from './../services/cursos.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { empty } from 'rxjs';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css'], 
  preserveWhitespaces: true
})
export class ListaCursosComponent implements OnInit {

  cursos: Cursos[];
  curso: Cursos;

  deleteModalRef: BsModalRef;

  cursoSelecionado: Cursos;

  @ViewChild('deleteModal',  {static: false}) deleteModal;

  constructor(private cursosService: CursosService,
              private router: Router,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.curso = new Cursos();
    this.listarCursos();
  }

  listarCursos(){
    this.cursosService.listCursos().subscribe(dados => this.cursos = dados);
  }

  obterId(id){
    this.cursosService.getCurso(id).subscribe();
    this.router.navigate(['cursos/editar', id]);
  }

  deletarCurso(id){
    this.cursosService.deletarCurso(id).subscribe();
    
  }

  onDelete(cursoId) {
    this.cursoSelecionado = cursoId;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm-6'});
  }

  onConfirmDelete(){
    this.cursosService.deletarCurso(this.cursoSelecionado).subscribe(

      success =>{
        this.listarCursos();
        this.deleteModalRef.hide();
      } 
    ),
    
    this.listarCursos();
  }

  onDeclineDelete(){
    this.deleteModalRef.hide();
  }


}
