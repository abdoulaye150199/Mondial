"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractCargaison = void 0;
/**
 * Classe abstraite de base pour toutes les cargaisons
 */
class AbstractCargaison {
    constructor(id, typeTransport, distanceKm, transportCalculator) {
        this.id = id;
        this.typeTransport = typeTransport;
        this.distanceKm = distanceKm;
        this.transportCalculator = transportCalculator;
        this._products = [];
        this.validateDistance(distanceKm);
    }
    validateDistance(distance) {
        if (distance <= 0) {
            throw new Error('La distance doit être supérieure à 0');
        }
    }
    get products() {
        return [...this._products]; // Retourne une copie pour l'immutabilité
    }
    ajouterProduit(product) {
        if (this.peutAjouterProduit(product)) {
            this._products.push(product);
        }
        else {
            throw new Error(`Impossible d'ajouter le produit ${product.libelle} à cette cargaison`);
        }
    }
    calculerFrais() {
        return this._products.reduce((total, product) => {
            return total + this.transportCalculator.calculerFraisProduit(product, this.distanceKm);
        }, 0);
    }
    sommeTotale() {
        return this._products.reduce((total, product) => total + product.poids, 0);
    }
    nbProduit() {
        return this._products.length;
    }
}
exports.AbstractCargaison = AbstractCargaison;
//# sourceMappingURL=AbstractCargaison.js.map