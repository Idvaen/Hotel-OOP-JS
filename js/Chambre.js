export class Chambre {
  //Variables privee
  #superficie = 10;
  #nombre_de_personnes = 0;
  #reservation = false;

  //Constructor
  /**
   *
   * @param {number} superficie
   * @param {number} nombre_de_personnes
   * @param {boolean} reservation
   */
  constructor(superficie, nombre_de_personnes, reservation) {
    this.#setSuperficie(superficie);
    this.#setNombreDePersonnes(nombre_de_personnes);
    this.#setReservation(reservation);
  }

  //Getters et Setters
  #setSuperficie(superficie) {
    if (!isNaN(superficie) && superficie >= 0) this.#superficie = superficie;
    else throw new Error(`${superficie} n'ete pas le Nombre ou < 0`);
  }

  #setNombreDePersonnes(nombre_de_personnes) {
    if (!isNaN(nombre_de_personnes) && nombre_de_personnes >= 0)
      this.#nombre_de_personnes = nombre_de_personnes;
    else throw new Error(`${nombre_de_personnes} n'ete pas le nombre ou < 0 `);
  }

  #setReservation(reservation) {
    if (reservation == false || reservation == true)
      this.#reservation = reservation;
    else throw new Error(`${reservation} n'ete pas un boolean`);
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
      // this.#setReservation(true);
      console.log(`On peux reserver chambre No: `);
    } else {
      console.log("Deja reserve!");
    }
    // let reserver = this.#reservation == false;
    // this.#reservation = reserver ? this.setReservation(true) : console.log("ERROR");
  }

  libererChambre() {
    if (this.#reservation) {
      // this.#setReservation(false);
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
