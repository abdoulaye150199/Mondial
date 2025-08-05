import { ProductFactory } from './factories/ProductFactory';
import { CargaisonFactory } from './factories/CargaisonFactory';
import { Logger } from './utils/Logger';
import { Formatter } from './utils/Formatter';

function main(): void {
  Logger.info('=== SYSTÈME DE GESTION DE CARGAISONS ===');
  Logger.info('Application de transport de colis mondiaux\n');

  try {
    Logger.info('--- Création d\'une cargaison routière ---');
    const cargaisonLocale = CargaisonFactory.createCargaisonRoutiere('CR_LOCAL_001', 250);

    const produits = [
      ProductFactory.createProductAlimentaire('ALI_001', 'Fruits et Légumes Bio', 800),
      ProductFactory.createProductAlimentaire('ALI_002', 'Produits Laitiers', 300),
      ProductFactory.createProductMateriel('MAT_001', 'Équipement Informatique', 150, true, true),
      ProductFactory.createProductMateriel('MAT_002', 'Mobilier de Bureau', 500, false, false),
      ProductFactory.createProductChimique('CHI_001', 'Produits de Nettoyage', 100, 3)
    ];

    produits.forEach(produit => {
      cargaisonLocale.ajouterProduit(produit);
      Logger.success(`✓ Ajouté: ${produit.getInfo()}`);
    });

    Logger.info('\n--- Résumé de la cargaison ---');
    Logger.info(Formatter.formatCargaisonSummary(cargaisonLocale));
    
    Logger.info('\nRestrictions appliquées:');
    cargaisonLocale.getRestrictions().forEach(restriction => {
      Logger.info(`  • ${restriction}`);
    });

    Logger.info('\n--- Création d\'une cargaison maritime pour export ---');
    const cargaisonExport = CargaisonFactory.createCargaisonMaritime('CM_EXPORT_001', 12000);
    
    const produitsExport = [
      ProductFactory.createProductMateriel('MAT_003', 'Machines Industrielles', 15000, false, false),
      ProductFactory.createProductMateriel('MAT_004', 'Véhicules', 25000, false, false),
      ProductFactory.createProductAlimentaire('ALI_003', 'Produits Agricoles', 8000),
      ProductFactory.createProductChimique('CHI_002', 'Produits Industriels', 2000, 5)
    ];

    produitsExport.forEach(produit => {
      cargaisonExport.ajouterProduit(produit);
      Logger.success(`✓ Ajouté: ${produit.getInfo()}`);
    });

    Logger.info('\n--- Résumé de l\'export maritime ---');
    Logger.info(Formatter.formatCargaisonSummary(cargaisonExport));

    Logger.info('\n--- Analyse comparative des coûts ---');
    const coutRoutier = cargaisonLocale.calculerFrais();
    const coutMaritime = cargaisonExport.calculerFrais();
    
    Logger.info(`Transport routier (${Formatter.formatDistance(cargaisonLocale.distanceKm)}): ${Formatter.formatPrice(coutRoutier)}`);
    Logger.info(`Transport maritime (${Formatter.formatDistance(cargaisonExport.distanceKm)}): ${Formatter.formatPrice(coutMaritime)}`);
    
    const coutParKmRoutier = coutRoutier / cargaisonLocale.distanceKm;
    const coutParKmMaritime = coutMaritime / cargaisonExport.distanceKm;
    
    Logger.info(`Coût par km - Routier: ${Formatter.formatPrice(coutParKmRoutier)}/km`);
    Logger.info(`Coût par km - Maritime: ${Formatter.formatPrice(coutParKmMaritime)}/km`);

    Logger.success('\n=== APPLICATION TERMINÉE AVEC SUCCÈS ===');

  } catch (error) {
    Logger.error('Erreur dans l\'application principale:', error as Error);
  }
}

main();