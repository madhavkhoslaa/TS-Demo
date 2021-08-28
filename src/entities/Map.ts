import { Location } from "../types/location";
export class Map {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  addMarker(UserMarker: Location): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: UserMarker.location.lat,
        lng: UserMarker.location.lng,
      },
    });
    marker.addListener("click", () => {
      const indoWIndow = new google.maps.InfoWindow({
        content: UserMarker.infoString,
      });
      indoWIndow.open(this.googleMap, marker);
    });
  }
}
