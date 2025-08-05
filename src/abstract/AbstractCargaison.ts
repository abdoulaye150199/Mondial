import { ICargaison } from '../interfaces/ICargaison';
import { IProduct } from '../interfaces/IProduct';
import { ITransportCalculator } from '../interfaces/ITransportCalculator';

export abstract class AbstractCargaison implements ICargaison {
  protected readonly _products: IProduct[] = [];

  protected constructor(
    public readonly id: string,
    public readonly typeTransport: 'routiere' | 'maritime' | 'aerienne',
    public readonly distanceKm: number,
    protected readonly transportCalculator: ITransportCalculator
  ) {
    this.validateDistance(distanceKm);
  }

  private validateDistance(distance: number): void {
    if (distance <= 0) {
      throw new Error('La distance doit être supérieure à 0');
    }
  }

  public get products(): IProduct[] {
    return [...this._products];
  }

  public ajouterProduit(product: IProduct): void {
    if (this.peutAjouterProduit(product)) {
      this._products.push(product);
    } else {
      throw new Error(`Impossible d'ajouter le produit ${product.libelle} à cette cargaison`);
    }
  }

  public calculerFrais(): number {
    return this._products.reduce((total, product) => {
      return total + this.transportCalculator.calculerFraisProduit(product, this.distanceKm);
    }, 0);
  }

  public sommeTotale(): number {
    return this._products.reduce((total, product) => total + product.poids, 0);
  }

  public nbProduit(): number {
    return this._products.length;
  }

  protected abstract peutAjouterProduit(product: IProduct): boolean;

  public abstract getRestrictions(): string[];
}