import { MapService } from "./../map.service";
import { Component, AfterViewInit } from "@angular/core";
import * as L from "leaflet";
import { Coordenadas } from "./coordenadas";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent implements AfterViewInit {
  private map;
  private coordenadas: Coordenadas;

  constructor(private mapService: MapService) {
    this.coordenadas = new Coordenadas();
  }

  ngAfterViewInit(): void {
    this.positionDefaultMap();
    this.initMap();
  }

  private initMap(): void {
    this.mapService.coordenadasBroadcast.subscribe((coords: Coordenadas) => {
      this.coordenadas = coords;
      if (this.map) {
        this.map.remove();
      }

      this.map = L.map("map", {
        center: [this.coordenadas.latitude, this.coordenadas.longitude],
        zoom: 17,
      });

      const tiles = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }
      );

      tiles.addTo(this.map);
    });
  }

  positionDefaultMap() {
    this.obterLocalizacaoAtual();    
    if (this.map) {
      this.map.remove();
    }
      
    this.map = L.map("map", {
      center: [-18.894668, -48.269871], // Localização Padrão Caso o Usuário
      zoom: 17,                         // Não Pertia no Navegador o recurso de localiza-lo no Mapa.
    });

    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
    tiles.addTo(this.map);
  }

  obterLocalizacaoAtual(){
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.coordenadas.latitude = position.coords.latitude;
        this.coordenadas.longitude = position.coords.longitude;
        this.mapService.coordenadasBroadcast.next(this.coordenadas);
      });
    }
  }
}
