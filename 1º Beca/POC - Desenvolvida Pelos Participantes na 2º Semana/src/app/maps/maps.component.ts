import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Coordinate } from './model/coordinate.model';
import { MapsService } from './shared/maps.service';

const iconRetinaUrl = 'https://png.pngtree.com/element_our/png_detail/20181227/marker-line-black-icon-png_287178.jpg';
  const iconUrl = 'https://png.pngtree.com/element_our/png_detail/20181227/marker-line-black-icon-png_287178.jpg';
  const shadowUrl = 'https://png.pngtree.com/element_our/png_detail/20181227/marker-line-black-icon-png_287178.jpg';
  const iconDefault = L.icon({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
    iconSize: [10, 10],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  });
  L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  private map;
  private coordinates: Coordinate;


  constructor(private mapService:MapsService) {
    this.coordinates = new Coordinate();
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.positionDefaultMap();
    this.initMap();

  }
  private initMap(): void {
    this.mapService.coordenadasBroadcast.subscribe((coords: Coordinate) => {
      this.coordinates = coords;
      if (this.map) {
        this.map.remove();
      }
      this.map = L.map('map', {
        center: [this.coordinates.latitude, this.coordinates.longitude],
        zoom: 17,
      });

      const tiles = L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          maxZoom: 13,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }
      );

      tiles.addTo(this.map);
      console.log(this.coordinates.latitude, this.coordinates.longitude)
      L.marker([this.coordinates.latitude, this.coordinates.longitude]).addTo(this.map);
    });
  }

  positionDefaultMap() {

    this.obterLocalizacaoAtual();

    if (this.map) {
      this.map.remove();
    }

    this.map = L.map('map', {
      center: [-18.9105136,-48.278152 ], // Localização Padrão Caso o Usuário
      zoom: 1,                         // Não Pertia no Navegador o recurso de localiza-lo no Mapa.
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
    tiles.addTo(this.map);

  }


  obterLocalizacaoAtual() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.coordinates.latitude = position.coords.latitude;
        this.coordinates.longitude = position.coords.longitude;
        this.mapService.coordenadasBroadcast.next(this.coordinates);
        // this.mapService.makeCapitalMarkers(this.map);
        console.log(this.coordinates.latitude);
        console.log(this.coordinates.longitude);
        L.marker([this.coordinates.latitude, this.coordinates.longitude]).addTo(this.map);

      });
    }
  }


}
