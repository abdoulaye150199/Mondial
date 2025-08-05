"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMateriel = void 0;
const AbstractProduct_1 = require("../abstract/AbstractProduct");
/**
 * Classe pour les produits matériels
 */
class ProductMateriel extends AbstractProduct_1.AbstractProduct {
    constructor(id, libelle, poids, isFragile, isCassable) {
        super(id, libelle, poids);
        this.isFragile = isFragile;
        this.isCassable = isCassable;
        this.type = 'materiel';
    }
    getType() {
        const caracteristiques = [];
        if (this.isFragile)
            caracteristiques.push('Fragile');
        if (this.isCassable)
            caracteristiques.push('Cassable');
        const suffix = caracteristiques.length > 0 ? ` (${caracteristiques.join(', ')})` : '';
        return `Produit Matériel${suffix}`;
    }
    calculerFraisSpecifiques(distance) {
        let frais = 0;
        // Frais pour produits fragiles
        if (this.isFragile) {
            frais += this.poids * 1.5; // 1.5€ par kg pour emballage spécial
        }
        // Frais pour produits cassables
        if (this.isCassable) {
            frais += this.poids * 1.0; // 1€ par kg pour protection supplémentaire
        }
        // Assurance transport
        if (this.isFragile || this.isCassable) {
            frais += distance * 0.15; // Assurance transport spécialisé
        }
        return frais;
    }
}
exports.ProductMateriel = ProductMateriel;
//# sourceMappingURL=ProductMateriel.js.map