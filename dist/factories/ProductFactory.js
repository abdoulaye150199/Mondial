"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFactory = void 0;
const ProductAlimentaire_1 = require("../models/ProductAlimentaire");
const ProductChimique_1 = require("../models/ProductChimique");
const ProductMateriel_1 = require("../models/ProductMateriel");
/**
 * Factory pour créer des produits
 */
class ProductFactory {
    static createProductAlimentaire(id, libelle, poids) {
        return new ProductAlimentaire_1.ProductAlimentaire(id, libelle, poids);
    }
    static createProductChimique(id, libelle, poids, degreToxicite) {
        return new ProductChimique_1.ProductChimique(id, libelle, poids, degreToxicite);
    }
    static createProductMateriel(id, libelle, poids, isFragile, isCassable) {
        return new ProductMateriel_1.ProductMateriel(id, libelle, poids, isFragile, isCassable);
    }
}
exports.ProductFactory = ProductFactory;
//# sourceMappingURL=ProductFactory.js.map