import faker from "faker";

// optionally can do export class User implements MapMarker to show implementation and catch errors 
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string{
    return `Username: ${this.name}`
  }
}
