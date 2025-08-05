import { AbstractProduct } from '../abstract/AbstractProduct';
import { IProductMateriel } from '../interfaces/IProductMateriel';

export class ProductMateriel extends AbstractProduct implements IProductMateriel {
  public readonly type = 'materiel' as const;

  constructor(
    id: string,
    libelle: string,
    poids: number,
    public readonly isFragile: boolean,
    public readonly isCassable: boolean
  ) {
    super(id, libelle, poids);
  }

  public getType(): string {
    const caracteristiques = [];
    if (this.isFragile) caracteristiques.push('Fragile');
    if (this.isCassable) caracteristiques.push('Cassable');
    
    const suffix = caracteristiques.length > 0 ? ` (${caracteristiques.join(', ')})` : '';
    return `Produit Matériel${suffix}`;
  }

  public calculerFraisSpecifiques(distance: number): number {
    let frais = 0;

    if (this.isFragile) {
      frais += this.poids * 1.5;
    }

    if (this.isCassable) {
      frais += this.poids * 1.0; 
    }

    if (this.isFragile || this.isCassable) {
      frais += distance * 0.15;
    }
    
    return frais;
  }
}