import faker from "faker";
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  infoString: string;
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.infoString = `userName: ${this.name}`;
  }
}

export const user = new User();
