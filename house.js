export default class House {
  constructor(
    windows,
    doors,
    rooms,
    { backyard, garage, heating, swimpool, garden } = {}
  ) {
    this.windows = windows;
    this.doors = doors;
    this.rooms = rooms;
    this.backyard = backyard;
    this.garage = garage;
    this.heating = heating;
    this.swimpool = swimpool;
    this.garden = garden;
  }
}
