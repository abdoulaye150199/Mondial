"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductFactory_1 = require("./factories/ProductFactory");
const CargaisonFactory_1 = require("./factories/CargaisonFactory");
const Logger_1 = require("./utils/Logger");
const Formatter_1 = require("./utils/Formatter");
/**
 * Tests et démonstrations du système de gestion de cargaisons
 */
function runTests() {
    Logger_1.Logger.info('=== DÉBUT DES TESTS DU SYSTÈME DE CARGAISONS ===');
    try {
        // Test 1: Création de produits
        Logger_1.Logger.info('\n--- Test 1: Création de produits ---');
        const produitAlimentaire = ProductFactory_1.ProductFactory.createProductAlimentaire('A001', 'Pommes Bio', 500);
        const produitChimique = ProductFactory_1.ProductFactory.createProductChimique('C001', 'Acide Sulfurique', 200, 8);
        const produitMateriel = ProductFactory_1.ProductFactory.createProductMateriel('M001', 'Ordinateur Portable', 50, true, true);
        Logger_1.Logger.success(`Produit alimentaire créé: ${produitAlimentaire.getInfo()}`);
        Logger_1.Logger.success(`Produit chimique créé: ${produitChimique.getInfo()}`);
        Logger_1.Logger.success(`Produit matériel créé: ${produitMateriel.getInfo()}`);
        // Test 2: Création de cargaisons
        Logger_1.Logger.info('\n--- Test 2: Création de cargaisons ---');
        const cargaisonRoutiere = CargaisonFactory_1.CargaisonFactory.createCargaisonRoutiere('CR001', 500);
        const cargaisonMaritime = CargaisonFactory_1.CargaisonFactory.createCargaisonMaritime('CM001', 2000);
        const cargaisonAerienne = CargaisonFactory_1.CargaisonFactory.createCargaisonAerienne('CA001', 8000);
        Logger_1.Logger.success('Cargaisons créées avec succès');
        // Test 3: Ajout de produits aux cargaisons
        Logger_1.Logger.info('\n--- Test 3: Ajout de produits aux cargaisons ---');
        // Cargaison routière
        cargaisonRoutiere.ajouterProduit(produitAlimentaire);
        cargaisonRoutiere.ajouterProduit(produitMateriel);
        Logger_1.Logger.success(`Produits ajoutés à la cargaison routière: ${cargaisonRoutiere.nbProduit()} produits`);
        // Cargaison maritime
        const grosMateriels = [
            ProductFactory_1.ProductFactory.createProductMateriel('M002', 'Machine Industrielle', 5000, false, false),
            ProductFactory_1.ProductFactory.createProductMateriel('M003', 'Conteneur Métallique', 3000, false, false)
        ];
        grosMateriels.forEach(produit => cargaisonMaritime.ajouterProduit(produit));
        Logger_1.Logger.success(`Produits ajoutés à la cargaison maritime: ${cargaisonMaritime.nbProduit()} produits`);
        // Cargaison aérienne (produits légers uniquement)
        const produitsLegers = [
            ProductFactory_1.ProductFactory.createProductAlimentaire('A002', 'Épices Rares', 10),
            ProductFactory_1.ProductFactory.createProductChimique('C002', 'Produit Pharmaceutique', 5, 2),
            ProductFactory_1.ProductFactory.createProductMateriel('M004', 'Composants Électroniques', 20, true, false)
        ];
        produitsLegers.forEach(produit => cargaisonAerienne.ajouterProduit(produit));
        Logger_1.Logger.success(`Produits ajoutés à la cargaison aérienne: ${cargaisonAerienne.nbProduit()} produits`);
        // Test 4: Calculs et affichage des résultats
        Logger_1.Logger.info('\n--- Test 4: Calculs et résultats ---');
        const cargaisons = [cargaisonRoutiere, cargaisonMaritime, cargaisonAerienne];
        cargaisons.forEach(cargaison => {
            Logger_1.Logger.info(`\n${Formatter_1.Formatter.formatCargaisonSummary(cargaison)}`);
            Logger_1.Logger.info('Restrictions:');
            cargaison.getRestrictions().forEach(restriction => {
                Logger_1.Logger.info(`  - ${restriction}`);
            });
            Logger_1.Logger.info('Produits:');
            cargaison.products.forEach(produit => {
                Logger_1.Logger.info(`  - ${Formatter_1.Formatter.formatProductSummary(produit)}`);
            });
        });
        // Test 5: Test des restrictions
        Logger_1.Logger.info('\n--- Test 5: Test des restrictions ---');
        try {
            // Tentative d'ajout d'un produit chimique très toxique en aérien
            const produitTresToxique = ProductFactory_1.ProductFactory.createProductChimique('C003', 'Produit Dangereux', 100, 9);
            cargaisonAerienne.ajouterProduit(produitTresToxique);
        }
        catch (error) {
            Logger_1.Logger.warn(`Restriction respectée: ${error.message}`);
        }
        try {
            // Tentative d'ajout d'un produit très lourd en routier
            const produitTresLourd = ProductFactory_1.ProductFactory.createProductMateriel('M005', 'Équipement Industriel', 50000, false, false);
            cargaisonRoutiere.ajouterProduit(produitTresLourd);
        }
        catch (error) {
            Logger_1.Logger.warn(`Restriction respectée: ${error.message}`);
        }
        // Test 6: Comparaison des coûts
        Logger_1.Logger.info('\n--- Test 6: Comparaison des coûts de transport ---');
        const produitTest = ProductFactory_1.ProductFactory.createProductAlimentaire('TEST', 'Produit Test', 1000);
        const distance = 1000;
        const testRoutier = CargaisonFactory_1.CargaisonFactory.createCargaisonRoutiere('TEST_R', distance);
        const testMaritime = CargaisonFactory_1.CargaisonFactory.createCargaisonMaritime('TEST_M', distance);
        const testAerien = CargaisonFactory_1.CargaisonFactory.createCargaisonAerienne('TEST_A', distance);
        [testRoutier, testMaritime, testAerien].forEach(cargaison => {
            cargaison.ajouterProduit(produitTest);
            Logger_1.Logger.info(`${cargaison.typeTransport.toUpperCase()}: ${Formatter_1.Formatter.formatPrice(cargaison.calculerFrais())} pour ${Formatter_1.Formatter.formatWeight(produitTest.poids)} sur ${Formatter_1.Formatter.formatDistance(distance)}`);
        });
        Logger_1.Logger.success('\n=== TOUS LES TESTS SONT TERMINÉS AVEC SUCCÈS ===');
    }
    catch (error) {
        Logger_1.Logger.error('Erreur lors des tests:', error);
    }
}
// Exécution des tests
runTests();
//# sourceMappingURL=test.js.map