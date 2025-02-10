import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type RespostaApi = {
  id: string,
  url: string,
  width: number,
  height: number,
  name: string,
  cfa_url: string,
  vetstreet_url: string,
  vcahospitals_url: string,
  temperament: string,
  origin: string,
  country_codes: string,
  country_code: string,
  description: string,
  life_span: number,
  indoor: number,
  lap: number,
  alt_names: string,
  adaptability: number,
  affection_level: number,
  child_friendly: number,
  dog_friendly: number,
  energy_level: number,
  grooming: number,
  health_issues: number,
  intelligence: number,
  shedding_level: number,
  social_needs: number,
  stranger_friendly: number,
  vocalisation: number,
  experimental: number,
  hairless: number,
  natural: number,
  rare: number,
  rex: number,
  suppressed_tail: number,
  short_legs: number,
  wikipedia_url: string,
  hypoallergenic: number,
  reference_image_id: string
}

@Component({
  selector: 'app-cats',
  imports: [],
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.css'
})
export class CatsComponent {

  paramCats: string = '';
  paramName: string = '';
  paramFoto: string = '';
  paramOrigin: string = '';

  constructor(private requisicao: HttpClient) {}

  buscarCat(){

    const headers = {
      "x-api-key": "live_r9vQ2cN2asTGbYUoAeYd6RrLHSeIDOAyqZdeVJfPONwCgssWvSkqnFOXXyxOTnjR" 
    };

    this.paramCats = 'Buscando informação';

    this.requisicao.get<RespostaApi[]>(`https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`, { headers }).subscribe(dados => {
      const RespostaApi = dados[0];
      this.paramCats = "Informação encontrada";
      this.paramFoto = RespostaApi.url;
      this.paramName = RespostaApi.name;
      this.paramOrigin = RespostaApi.origin;
    })

  }

}
