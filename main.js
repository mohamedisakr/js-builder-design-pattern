// https://refactoring.guru/design-patterns/builder
import House from "./house.js";
import Backyard from "./backyard.js";
import Garage from "./garage.js";
import Heating from "./heating.js";
import Swimpool from "./swimpool.js";
import Garden from "./garden.js";

// house options
const backyard = new Backyard(1000);
const garage = new Garage(2000);
const heating = new Heating("full", 380);
const swimpool = new Swimpool(2200);
const garden = new Garden(3400);

// house
const house = new House(21, 3, 100, {
  backyard,
  garage,
  heating,
  swimpool,
  garden
});

console.log(house);
