"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductChimique = void 0;
const AbstractProduct_1 = require("../abstract/AbstractProduct");
/**
 * Classe pour les produits chimiques
 */
class ProductChimique extends AbstractProduct_1.AbstractProduct {
    constructor(id, libelle, poids, degreToxicite) {
        super(id, libelle, poids);
        this.degreToxicite = degreToxicite;
        this.type = 'chimique';
        this.validateDegreToxicite(degreToxicite);
    }
    validateDegreToxicite(degre) {
        if (degre < 1 || degre > 10) {
            throw new Error('Le degré de toxicité doit être entre 1 et 10');
        }
    }
    getType() {
        return `Produit Chimique (Toxicité: ${this.degreToxicite}/10)`;
    }
    calculerFraisSpecifiques(distance) {
        // Frais spéciaux basés sur la toxicité
        const fraisToxicite = this.poids * this.degreToxicite * 2; // 2€ par kg par niveau de toxicité
        const fraisSecurite = this.degreToxicite > 5 ? 100 : 50; // Frais de sécurité
        const fraisTransportSpecial = distance * 0.2; // Transport spécialisé
        return fraisToxicite + fraisSecurite + fraisTransportSpecial;
    }
}
exports.ProductChimique = ProductChimique;
//# sourceMappingURL=ProductChimique.js.map