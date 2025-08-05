"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAlimentaire = void 0;
const AbstractProduct_1 = require("../abstract/AbstractProduct");
/**
 * Classe pour les produits alimentaires
 */
class ProductAlimentaire extends AbstractProduct_1.AbstractProduct {
    constructor(id, libelle, poids) {
        super(id, libelle, poids);
        this.type = 'alimentaire';
    }
    getType() {
        return 'Produit Alimentaire';
    }
    calculerFraisSpecifiques(distance) {
        // Frais spéciaux pour les produits alimentaires (conservation, réfrigération)
        const fraisConservation = this.poids * 0.5; // 0.5€ par kg
        const fraisDistance = distance > 500 ? distance * 0.1 : 0; // Frais supplémentaires pour longue distance
        return fraisConservation + fraisDistance;
    }
}
exports.ProductAlimentaire = ProductAlimentaire;
//# sourceMappingURL=ProductAlimentaire.js.map