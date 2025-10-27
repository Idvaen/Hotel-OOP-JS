import { Chambre } from "./Chambre.js";

try{
    //FAUX
    // let chambre = new Chambre();
    // let chambre = new Chambre("dfd");
    // let chambre = new Chambre(-1,2,2);
    // let chambre = new Chambre('23','2', 'true');
    // let chambre = new Chambre(50, -2, false);
    // let chambre = new Chambre(50, '2-', false);

    //VRAI
    // let chambre = new Chambre(50, 5, false);
    // let chambre = new Chambre(22,'22', true);
}catch(err){
    console.log(err.message);
}