import { Injectable } from '@angular/core';
import { Unidade } from '../models';

@Injectable()

export class UnidadeService {

  private unidades: Unidade[];

  constructor() { }

  // https://github.com/robianchini/conversor-api.git
  private unidadesObj = [
    { "unidade": "area", "sigla": "sqft", "descricao": "pés quadrados" },
    { "unidade": "area", "sigla": "m2", "descricao": "metros quadrados" },
    { "unidade": "area", "sigla": "km2", "descricao": "quilometros quadrados" },
    { "unidade": "area", "sigla": "mi2", "descricao": "milhas quadradas" },
    { "unidade": "area", "sigla": "yd2", "descricao": "jardas quadradas" },
    { "unidade": "area", "sigla": "in2", "descricao": "polegadas quadradas" },
    { "unidade": "area", "sigla": "ha", "descricao": "hectares" },
    { "unidade": "temperature", "sigla": "k", "descricao": "Kelvin" },
    { "unidade": "temperature", "sigla": "c", "descricao": "Graus Celcius" },
    { "unidade": "temperature", "sigla": "f", "descricao": "Graus Fahrenheit" }
  ];

  public unidadeOnly =[
    {"unidade":"area"},
    {"unidade":"lenght"},
    {"unidade":"speed"},
    {"unidade":"temperature"},
    {"unidade":"volume"},
    {"unidade":"weight"},
  ]

  listarUnidade(): Unidade[]{
    if(this.unidades){
      return this.unidades;
    }
    this.unidades = []

    for( let indice of this.unidadesObj){
      let unidade: Unidade = new Unidade();
      Object.assign(unidade,indice);
      this.unidades.push(unidade);
    }
    return this.unidades;
  }
  

}
