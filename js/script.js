import { Chambre } from "./Chambre.js";

let hotel = [];

for (let i = 0; i < 10; i++) {
  hotel[i] = new Chambre(
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 6),
    Math.floor(Math.random() * 2) == 1
  );
}

console.log(hotel);
testerHotelReservation();
testerHotelLiberation();

function testerHotelReservation() {
  for (let chambre in hotel) {
    hotel[chambre].reserverChambre();
    console.log(parseInt(chambre)+1);
  }
  console.log("\n\n\n");
}

// let chambre1 = hotel[0];
// console.log(chambre1.getReservation());
// chambre1.reserverChambre()

function testerHotelLiberation() {
  for (let chambre in hotel) {
    hotel[chambre].libererChambre();
    console.log(parseInt(chambre)+1)
  }
  console.log("\n\n\n");
}
