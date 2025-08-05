"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportCalculator = void 0;
const AbstractProduct_1 = require("../abstract/AbstractProduct");
/**
 * Service de calcul des frais de transport
 */
class TransportCalculator {
    constructor(typeTransport) {
        this.typeTransport = typeTransport;
        this.tarifBase = {
            'routiere': 0.5, // 0.5€ par kg par km
            'maritime': 0.3, // 0.3€ par kg par km
            'aerienne': 1.2 // 1.2€ par kg par km
        };
    }
    calculerFraisTransport(poids, distance) {
        const tarif = this.tarifBase[this.typeTransport];
        return poids * distance * tarif;
    }
    calculerFraisProduit(product, distance) {
        // Frais de base
        const fraisBase = this.calculerFraisTransport(product.poids, distance);
        // Frais spécifiques au produit (si c'est un AbstractProduct)
        let fraisSpecifiques = 0;
        if (product instanceof AbstractProduct_1.AbstractProduct) {
            fraisSpecifiques = product.calculerFraisSpecifiques(distance);
        }
        return fraisBase + fraisSpecifiques;
    }
}
exports.TransportCalculator = TransportCalculator;
//# sourceMappingURL=TransportCalculator.js.map