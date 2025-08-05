import { AbstractProduct } from '../abstract/AbstractProduct';
import { IProductChimique } from '../interfaces/IProductChimique';


export class ProductChimique extends AbstractProduct implements IProductChimique {
  public readonly type = 'chimique' as const;

  constructor(
    id: string,
    libelle: string,
    poids: number,
    public readonly degreToxicite: number
  ) {
    super(id, libelle, poids);
    this.validateDegreToxicite(degreToxicite);
  }

  private validateDegreToxicite(degre: number): void {
    if (degre < 1 || degre > 10) {
      throw new Error('Le degré de toxicité doit être entre 1 et 10');
    }
  }

  public getType(): string {
    return `Produit Chimique (Toxicité: ${this.degreToxicite}/10)`;
  }

  public calculerFraisSpecifiques(distance: number): number {
    // Frais spéciaux basés sur la toxicité
    const fraisToxicite = this.poids * this.degreToxicite * 2; 
    const fraisSecurite = this.degreToxicite > 5 ? 100 : 50; 
    const fraisTransportSpecial = distance * 0.2; 
    return fraisToxicite + fraisSecurite + fraisTransportSpecial;
  }
}