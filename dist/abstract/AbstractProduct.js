"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractProduct = void 0;
/**
 * Classe abstraite de base pour tous les produits
 */
class AbstractProduct {
    constructor(id, libelle, poids) {
        this.id = id;
        this.libelle = libelle;
        this.poids = poids;
        this.validatePoids(poids);
    }
    validatePoids(poids) {
        if (poids <= 0) {
            throw new Error('Le poids doit être supérieur à 0');
        }
    }
    /**
     * Méthode pour obtenir les informations du produit
     */
    getInfo() {
        return `${this.getType()} - ${this.libelle} (${this.poids}kg)`;
    }
}
exports.AbstractProduct = AbstractProduct;
//# sourceMappingURL=AbstractProduct.js.map