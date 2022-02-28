import {} from "google.maps";

interface MapMarker {
  location: {
    lat: number;
    lng: number;
  };

  // interface function that is now required, need method markerContent in Class
  markerContent(): string;
}

export class CustomMap {
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

  addMarker(mapMarker: MapMarker): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapMarker.location.lat,
        lng: mapMarker.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: "Hello from " + mapMarker.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
