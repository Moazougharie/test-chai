class FraisLivraison {
    constructor(destination) {
        this.destination = destination; // Destination de la livraison
    }

    // Méthode pour calculer les frais de livraison en fonction de la destination
    calculerFraisLivraison(poids) {
        // Logique de calcul des frais en fonction de la destination et du poids
        // Cet exemple est simplifié et ne représente pas de calcul réel
        if (this.destination === 'France') {
            return poids * 0.5; // Calcul des frais pour la France
        } else {
            return poids * 1.2; // Calcul des frais pour les autres destinations
        }
    }
}