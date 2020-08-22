import { Component, OnInit,AfterViewInit, Input  } from "@angular/core";
import * as L from "leaflet";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent implements AfterViewInit  {
  private map;
  @Input() latitude: number;
  @Input() longitude: number;
  
  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ this.latitude, this.longitude ],
      zoom: 12
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
}
