import { AbstractProduct } from '../abstract/AbstractProduct';
import { IProductAlimentaire } from '../interfaces/IProductAlimentaire';

export class ProductAlimentaire extends AbstractProduct implements IProductAlimentaire {
  public readonly type = 'alimentaire' as const;

  constructor(id: string, libelle: string, poids: number) {
    super(id, libelle, poids);
  }

  public getType(): string {
    return 'Produit Alimentaire';
  }

  public calculerFraisSpecifiques(distance: number): number {
    const fraisConservation = this.poids * 0.5; 
    const fraisDistance = distance > 500 ? distance * 0.1 : 0; 
    return fraisConservation + fraisDistance;
  }
}