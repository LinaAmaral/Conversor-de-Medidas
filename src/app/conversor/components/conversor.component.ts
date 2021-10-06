import { Component, OnInit, ViewChild } from '@angular/core';
import { Conversao, ConversaoResponse, Unidade } from '../models';
import { ConversaoService, UnidadeService } from '../services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})

export class ConversorComponent implements OnInit {

  public unidades: Unidade[];
  public conversao: Conversao;
  public conversaoResponse: ConversaoResponse;
  public possuiErro: boolean

  @ViewChild('conversorForm', {static:true}) 
  conversorForm: NgForm

  constructor(private unidadeService: UnidadeService,
    private conversaoService: ConversaoService) { }

  ngOnInit(): void {
    this.unidades = this.unidadeService.listarUnidade();
    this.conversao = new Conversao('area', 'm2', 'km2', null)
  }

  converter():void{
    this.conversaoService.converter(this.conversao).subscribe(
      response => {
        this.conversaoResponse = response;
        console.log(response)
      },
      error => this.possuiErro = true
    )
  }

}
