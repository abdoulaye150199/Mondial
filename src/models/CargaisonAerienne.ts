import { AbstractCargaison } from '../abstract/AbstractCargaison';
import { IProduct } from '../interfaces/IProduct';
import { IProductChimique } from '../interfaces/IProductChimique';
import { TransportCalculator } from '../services/TransportCalculator';

export class CargaisonAerienne extends AbstractCargaison {
  private static readonly POIDS_MAX = 10000; 
  private static readonly PRODUITS_MAX = 50;

  constructor(id: string, distanceKm: number) {
    super(id, 'aerienne', distanceKm, new TransportCalculator('aerienne'));
  }

  protected peutAjouterProduit(product: IProduct): boolean {
    // Vérification du poids total
    if (this.sommeTotale() + product.poids > CargaisonAerienne.POIDS_MAX) {
      return false;
    }

    // Vérification du nombre de produits
    if (this.nbProduit() >= CargaisonAerienne.PRODUITS_MAX) {
      return false;
    }

    // Vérification sécurisée des produits chimiques
    if ('type' in product && product.type === 'chimique') {
      const productChimique = product as IProductChimique;
      if (productChimique.degreToxicite > 3) {
        return false;
      }
    }

    return true;
  }

  public getRestrictions(): string[] {
    return [
      `Poids maximum: ${CargaisonAerienne.POIDS_MAX}kg`,
      `Nombre maximum de produits: ${CargaisonAerienne.PRODUITS_MAX}`,
      'Produits chimiques avec toxicité > 3 interdits',
      'Restrictions aériennes strictes appliquées'
    ];
  }
}