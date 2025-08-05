"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formatter = void 0;
/**
 * Utilitaire de formatage pour l'affichage
 */
class Formatter {
    static formatPrice(price) {
        return `${price.toFixed(2)}€`;
    }
    static formatWeight(weight) {
        if (weight >= 1000) {
            return `${(weight / 1000).toFixed(2)}t`;
        }
        return `${weight}kg`;
    }
    static formatDistance(distance) {
        return `${distance}km`;
    }
    static formatProductSummary(product) {
        return `${product.libelle} - ${this.formatWeight(product.poids)}`;
    }
    static formatCargaisonSummary(cargaison) {
        return [
            `Cargaison ${cargaison.id}`,
            `Type: ${cargaison.typeTransport}`,
            `Distance: ${this.formatDistance(cargaison.distanceKm)}`,
            `Produits: ${cargaison.nbProduit()}`,
            `Poids total: ${this.formatWeight(cargaison.sommeTotale())}`,
            `Frais total: ${this.formatPrice(cargaison.calculerFrais())}`
        ].join(' | ');
    }
}
exports.Formatter = Formatter;
//# sourceMappingURL=Formatter.js.map