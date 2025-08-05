"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargaisonAerienne = void 0;
const AbstractCargaison_1 = require("../abstract/AbstractCargaison");
const TransportCalculator_1 = require("../services/TransportCalculator");
/**
 * Cargaison pour transport aérien
 */
class CargaisonAerienne extends AbstractCargaison_1.AbstractCargaison {
    constructor(id, distanceKm) {
        super(id, 'aerienne', distanceKm, new TransportCalculator_1.TransportCalculator('aerienne'));
    }
    peutAjouterProduit(product) {
        // Vérifier le poids maximum
        if (this.sommeTotale() + product.poids > CargaisonAerienne.POIDS_MAX) {
            return false;
        }
        // Vérifier le nombre maximum de produits
        if (this.nbProduit() >= CargaisonAerienne.PRODUITS_MAX) {
            return false;
        }
        // Restrictions strictes pour les produits chimiques
        const productChimique = product;
        if (productChimique.type === 'chimique') {
            if (productChimique.degreToxicite > 3) {
                return false; // Produits chimiques très limités en aérien
            }
        }
        return true;
    }
    getRestrictions() {
        return [
            `Poids maximum: ${CargaisonAerienne.POIDS_MAX}kg`,
            `Nombre maximum de produits: ${CargaisonAerienne.PRODUITS_MAX}`,
            'Produits chimiques avec toxicité > 3 interdits',
            'Restrictions aériennes strictes appliquées'
        ];
    }
}
exports.CargaisonAerienne = CargaisonAerienne;
CargaisonAerienne.POIDS_MAX = 10000; // 10 tonnes max
CargaisonAerienne.PRODUITS_MAX = 50;
//# sourceMappingURL=CargaisonAerienne.js.map