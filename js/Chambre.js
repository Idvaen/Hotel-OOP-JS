export class Chambre {
  //Variables privee
  #superficie = 0;
  #nombre_de_personnes = 0;
  #reservation = false;

  //Constructor
  constructor(superficie, nombre_de_personnes, reservation) {
    this.#setSuperficie(superficie);
    this.#setNombreDePersonnes(nombre_de_personnes);
    this.#setReservation(reservation);
  }

  //Getters et Setters
  #setSuperficie(superficie) {
    if (!isNaN(superficie)) {
      this.#superficie = superficie;
    }
  }
  #setNombreDePersonnes(nombre_de_personnes) {
    this.#nombre_de_personnes = nombre_de_personnes;
  }
  #setReservation(reservation) {
    this.#reservation = reservation;
  }

  getSuperficie() {
    return this.#superficie;
  }
  getNombreDePersonnes() {
    return this.#nombre_de_personnes;
  }
  getReservation() {
    return this.#reservation;
  }

  //Metodes
  reserverChambre() {
    if (!this.#reservation) {
      //   this.setReservation(true);
      console.log(`On peux reserver chambre No: `);
    } else {
      console.log("Deja reserve!");
    }
    // let reserver = this.#reservation == false;
    // this.#reservation = reserver ? this.setReservation(true) : console.log("ERROR");
  }

  libererChambre() {
    if (this.#reservation) {
      // this.setReservation(false);
      console.log(`On peux librer chambre No: `);
    } else {
      console.log("Deja libre!");
    }
    // let reserver = this.#reservation == true;
    // this.#reservation = reserver
    //   ? this.setReservation(false)
    //   : console.log("ERROR");
  }
}
