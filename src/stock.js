class Stock {
    constructor(article, quantity) {
        this.article = article; // Article associé au stock
        this.quantity = quantity; // Quantité disponible en stock
    }

    // Méthode pour vérifier la disponibilité en stock
    estDisponible(quantiteDemandee) {
        return this.quantity >= quantiteDemandee;
    }

    // Méthode pour mettre à jour la quantité en stock après une vente par exemple
    mettreAJourStock(quantiteVendue) {
        if (this.estDisponible(quantiteVendue)) {
            this.quantity -= quantiteVendue;
            return true; // Vente réussie
        }
        return false; // Stock insuffisant pour la vente
    }
}