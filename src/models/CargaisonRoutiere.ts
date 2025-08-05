import { AbstractCargaison } from '../abstract/AbstractCargaison';
import { IProduct } from '../interfaces/IProduct';
import { IProductChimique } from '../interfaces/IProductChimique';
import { TransportCalculator } from '../services/TransportCalculator';

export class CargaisonRoutiere extends AbstractCargaison {
  private static readonly POIDS_MAX = 40000; // 40 tonnes max
  private static readonly PRODUITS_MAX = 100;

  constructor(id: string, distanceKm: number) {
    super(id, 'routiere', distanceKm, new TransportCalculator('routiere'));
  }

  protected peutAjouterProduit(product: IProduct): boolean {

    if (this.sommeTotale() + product.poids > CargaisonRoutiere.POIDS_MAX) {
      return false;
    }

    if (this.nbProduit() >= CargaisonRoutiere.PRODUITS_MAX) {
      return false;
    }

    const productChimique = product as IProductChimique;
    if (productChimique.type === 'chimique' && productChimique.degreToxicite > 7) {

      return false;
    }

    return true;
  }

  public getRestrictions(): string[] {
    return [
      `Poids maximum: ${CargaisonRoutiere.POIDS_MAX}kg`,
      `Nombre maximum de produits: ${CargaisonRoutiere.PRODUITS_MAX}`,
      'Produits chimiques avec toxicité > 7 interdits'
    ];
  }
}