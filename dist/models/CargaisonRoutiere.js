"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargaisonRoutiere = void 0;
const AbstractCargaison_1 = require("../abstract/AbstractCargaison");
const TransportCalculator_1 = require("../services/TransportCalculator");
/**
 * Cargaison pour transport routier
 */
class CargaisonRoutiere extends AbstractCargaison_1.AbstractCargaison {
    constructor(id, distanceKm) {
        super(id, 'routiere', distanceKm, new TransportCalculator_1.TransportCalculator('routiere'));
    }
    peutAjouterProduit(product) {
        // Vérifier le poids maximum
        if (this.sommeTotale() + product.poids > CargaisonRoutiere.POIDS_MAX) {
            return false;
        }
        // Vérifier le nombre maximum de produits
        if (this.nbProduit() >= CargaisonRoutiere.PRODUITS_MAX) {
            return false;
        }
        // Vérifier les restrictions chimiques
        const productChimique = product;
        if (productChimique.type === 'chimique' && productChimique.degreToxicite > 7) {
            // Pas de produits très toxiques en transport routier standard
            return false;
        }
        return true;
    }
    getRestrictions() {
        return [
            `Poids maximum: ${CargaisonRoutiere.POIDS_MAX}kg`,
            `Nombre maximum de produits: ${CargaisonRoutiere.PRODUITS_MAX}`,
            'Produits chimiques avec toxicité > 7 interdits'
        ];
    }
}
exports.CargaisonRoutiere = CargaisonRoutiere;
CargaisonRoutiere.POIDS_MAX = 40000; // 40 tonnes max
CargaisonRoutiere.PRODUITS_MAX = 100;
//# sourceMappingURL=CargaisonRoutiere.js.map