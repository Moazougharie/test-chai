class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

module.exports = {
    Cube:Cube

}
// Classe représentant un article
class Article {
    constructor(name, price, quantity) {
        this.name = name; // Nom de l'article
        this.price = price; // Prix unitaire de l'article
        this.quantity = quantity; // Quantité de l'article dans le panier
    }
}

// Classe représentant un panier
class Panier {
    constructor() {
        this.articles = []; // Initialisation du panier avec un tableau vide
    }

    // Méthode pour ajouter un article au panier
    ajouterArticle(article) {
        this.articles.push(article);
    }

    // Méthode pour retirer un article du panier en fonction de son nom
    retirerArticle(articleName) {
        this.articles = this.articles.filter
    }

    // Méthode pour calculer le montant total du panier
    calculerMontantTotal() {
        let total = 0;
        this.articles.forEach(article => {
            total += article.price * article.quantity; // Calcul du montant pour chaque article dans le panier
        });
        return total;
    }

    // Méthode pour vider complètement le panier
    viderPanier() {
        this.articles = []; // Réinitialisation du panier avec un tableau vide
    }
}

// Utilisation des classes pour créer un panier, ajouter des articles, etc.
const panier = new Panier();

const article1 = new Article('Pommes', 2.5, 3); // Création d'un article 'Pommes' à 2.5 € l'unité, avec une quantité de 3
const article2 = new Article('Bananes', 1.8, 2); // Création d'un article 'Bananes' à 1.8 € l'unité, avec une quantité de 2

panier.ajouterArticle(article1); // Ajout de l'article 1 au panier
panier.ajouterArticle(article2); // Ajout de l'article 2 au panier

console.log("Montant total du panier :", panier.calculerMontantTotal()); // Affichage du montant total du panier

panier.retirerArticle('Pommes'); // Retrait de l'article 'Po

console.log("Montant total après retrait d'articles :", panier.calculerMontantTotal()); // Affichage du montant total après retrait d'articles

panier.viderPanier(); // Vidage complet du panier

console.log("Montant total après vidage du panier :", panier.calculerMontantTotal()); // Affichage du montant total après vidage du panier
