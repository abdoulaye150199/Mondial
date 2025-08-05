import { ProductFactory } from './factories/ProductFactory';
import { CargaisonFactory } from './factories/CargaisonFactory';
import { Logger } from './utils/Logger';
import { Formatter } from './utils/Formatter';

function runTests(): void {
  try {
    // Création des produits de test
    const produits = {
      alimentaire: ProductFactory.createProductAlimentaire('A001', 'Pommes Bio', 500),
      chimique: ProductFactory.createProductChimique('C001', 'Acide Sulfurique', 200, 8),
      materiel: ProductFactory.createProductMateriel('M001', 'Ordinateur', 50, true, true)
    };

    // Création des cargaisons
    const cargaisons = {
      routiere: CargaisonFactory.createCargaisonRoutiere('CR001', 500),
      maritime: CargaisonFactory.createCargaisonMaritime('CM001', 2000),
      aerienne: CargaisonFactory.createCargaisonAerienne('CA001', 8000)
    };

    // Test d'ajout de produits
    Object.values(cargaisons).forEach(cargaison => {
      try {
        Object.values(produits).forEach(produit => {
          try {
            cargaison.ajouterProduit(produit);
            Logger.success(`Ajouté: ${produit.getInfo()} à ${cargaison.id}`);
          } catch (e) {
            Logger.warn(`Non ajouté: ${produit.getInfo()} à ${cargaison.id}`);
          }
        });

        Logger.info(Formatter.formatCargaisonSummary(cargaison));
        cargaison.getRestrictions().forEach(r => Logger.info(`- ${r}`));
      } catch (e) {
        Logger.error(`Erreur avec ${cargaison.id}:`, e as Error);
      }
    });

    Logger.success('Tests terminés');
  } catch (error) {
    Logger.error('Erreur globale:', error as Error);
  }
}

runTests();