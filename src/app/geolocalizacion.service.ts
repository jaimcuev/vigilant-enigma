import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocalizacionService {

  constructor() { }

  solicitarGeolocalizacion() {  
    const onUbicacionConcedida = (ubicacion: any) => {
      console.log(ubicacion);
    }
    
    const onErrorDeUbicacion = (err: any) => {
      console.log(err);
    }
  
    const opcionesDeSolicitud = {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000
    };

    navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onErrorDeUbicacion, opcionesDeSolicitud);
  }
}
