"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductFactory_1 = require("./factories/ProductFactory");
const CargaisonFactory_1 = require("./factories/CargaisonFactory");
const Logger_1 = require("./utils/Logger");
const Formatter_1 = require("./utils/Formatter");
/**
 * Application principale de démonstration
 */
function main() {
    Logger_1.Logger.info('=== SYSTÈME DE GESTION DE CARGAISONS ===');
    Logger_1.Logger.info('Application de transport de colis mondiaux\n');
    try {
        // Création d'une cargaison routière pour livraison locale
        Logger_1.Logger.info('--- Création d\'une cargaison routière ---');
        const cargaisonLocale = CargaisonFactory_1.CargaisonFactory.createCargaisonRoutiere('CR_LOCAL_001', 250);
        // Ajout de différents types de produits
        const produits = [
            ProductFactory_1.ProductFactory.createProductAlimentaire('ALI_001', 'Fruits et Légumes Bio', 800),
            ProductFactory_1.ProductFactory.createProductAlimentaire('ALI_002', 'Produits Laitiers', 300),
            ProductFactory_1.ProductFactory.createProductMateriel('MAT_001', 'Équipement Informatique', 150, true, true),
            ProductFactory_1.ProductFactory.createProductMateriel('MAT_002', 'Mobilier de Bureau', 500, false, false),
            ProductFactory_1.ProductFactory.createProductChimique('CHI_001', 'Produits de Nettoyage', 100, 3)
        ];
        produits.forEach(produit => {
            cargaisonLocale.ajouterProduit(produit);
            Logger_1.Logger.success(`✓ Ajouté: ${produit.getInfo()}`);
        });
        // Affichage du résumé
        Logger_1.Logger.info('\n--- Résumé de la cargaison ---');
        Logger_1.Logger.info(Formatter_1.Formatter.formatCargaisonSummary(cargaisonLocale));
        Logger_1.Logger.info('\nRestrictions appliquées:');
        cargaisonLocale.getRestrictions().forEach(restriction => {
            Logger_1.Logger.info(`  • ${restriction}`);
        });
        // Création d'une cargaison maritime pour export international
        Logger_1.Logger.info('\n--- Création d\'une cargaison maritime pour export ---');
        const cargaisonExport = CargaisonFactory_1.CargaisonFactory.createCargaisonMaritime('CM_EXPORT_001', 12000);
        const produitsExport = [
            ProductFactory_1.ProductFactory.createProductMateriel('MAT_003', 'Machines Industrielles', 15000, false, false),
            ProductFactory_1.ProductFactory.createProductMateriel('MAT_004', 'Véhicules', 25000, false, false),
            ProductFactory_1.ProductFactory.createProductAlimentaire('ALI_003', 'Produits Agricoles', 8000),
            ProductFactory_1.ProductFactory.createProductChimique('CHI_002', 'Produits Industriels', 2000, 5)
        ];
        produitsExport.forEach(produit => {
            cargaisonExport.ajouterProduit(produit);
            Logger_1.Logger.success(`✓ Ajouté: ${produit.getInfo()}`);
        });
        Logger_1.Logger.info('\n--- Résumé de l\'export maritime ---');
        Logger_1.Logger.info(Formatter_1.Formatter.formatCargaisonSummary(cargaisonExport));
        // Comparaison des coûts
        Logger_1.Logger.info('\n--- Analyse comparative des coûts ---');
        const coutRoutier = cargaisonLocale.calculerFrais();
        const coutMaritime = cargaisonExport.calculerFrais();
        Logger_1.Logger.info(`Transport routier (${Formatter_1.Formatter.formatDistance(cargaisonLocale.distanceKm)}): ${Formatter_1.Formatter.formatPrice(coutRoutier)}`);
        Logger_1.Logger.info(`Transport maritime (${Formatter_1.Formatter.formatDistance(cargaisonExport.distanceKm)}): ${Formatter_1.Formatter.formatPrice(coutMaritime)}`);
        const coutParKmRoutier = coutRoutier / cargaisonLocale.distanceKm;
        const coutParKmMaritime = coutMaritime / cargaisonExport.distanceKm;
        Logger_1.Logger.info(`Coût par km - Routier: ${Formatter_1.Formatter.formatPrice(coutParKmRoutier)}/km`);
        Logger_1.Logger.info(`Coût par km - Maritime: ${Formatter_1.Formatter.formatPrice(coutParKmMaritime)}/km`);
        Logger_1.Logger.success('\n=== APPLICATION TERMINÉE AVEC SUCCÈS ===');
    }
    catch (error) {
        Logger_1.Logger.error('Erreur dans l\'application principale:', error);
    }
}
// Point d'entrée de l'application
main();
//# sourceMappingURL=main.js.map