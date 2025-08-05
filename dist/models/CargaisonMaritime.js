"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargaisonMaritime = void 0;
const AbstractCargaison_1 = require("../abstract/AbstractCargaison");
const TransportCalculator_1 = require("../services/TransportCalculator");
/**
 * Cargaison pour transport maritime
 */
class CargaisonMaritime extends AbstractCargaison_1.AbstractCargaison {
    constructor(id, distanceKm) {
        super(id, 'maritime', distanceKm, new TransportCalculator_1.TransportCalculator('maritime'));
    }
    peutAjouterProduit(product) {
        // Vérifier le poids maximum
        if (this.sommeTotale() + product.poids > CargaisonMaritime.POIDS_MAX) {
            return false;
        }
        // Vérifier le nombre maximum de produits
        if (this.nbProduit() >= CargaisonMaritime.PRODUITS_MAX) {
            return false;
        }
        // Les produits très fragiles ne sont pas recommandés en maritime
        const productMateriel = product;
        if (productMateriel.type === 'materiel' && productMateriel.isFragile && productMateriel.isCassable) {
            // On peut les accepter mais avec un surcoût
            console.warn(`Attention: Produit fragile et cassable en transport maritime: ${product.libelle}`);
        }
        return true;
    }
    getRestrictions() {
        return [
            `Poids maximum: ${CargaisonMaritime.POIDS_MAX}kg`,
            `Nombre maximum de produits: ${CargaisonMaritime.PRODUITS_MAX}`,
            'Produits fragiles et cassables déconseillés (surcoût appliqué)'
        ];
    }
}
exports.CargaisonMaritime = CargaisonMaritime;
CargaisonMaritime.POIDS_MAX = 500000; // 500 tonnes max
CargaisonMaritime.PRODUITS_MAX = 1000;
//# sourceMappingURL=CargaisonMaritime.js.map