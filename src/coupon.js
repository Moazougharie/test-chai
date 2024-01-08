class Coupon {
    constructor(code, pourcentage) {
        this.code = code; // Code du coupon
        this.pourcentage = pourcentage; // Pourcentage de réduction du coupon
    }

    // Méthode pour vérifier et appliquer le coupon à un montant
    appliquerCoupon(montant, code) {
        if (code === this.code) {
            return montant - (montant * (this.pourcentage / 100));
        } else {
            return montant; // Aucune réduction si le code ne correspond pas
        }
    }}