import { ITransportCalculator } from '../interfaces/ITransportCalculator';
import { IProduct } from '../interfaces/IProduct';
import { AbstractProduct } from '../abstract/AbstractProduct';

export class TransportCalculator implements ITransportCalculator {
  private readonly tarifBase: Record<string, number> = {
    'routiere': 0.5,   // 0.5€ par kg par km
    'maritime': 0.3,   // 0.3€ par kg par km
    'aerienne': 1.2    // 1.2€ par kg par km
  };

  constructor(private readonly typeTransport: 'routiere' | 'maritime' | 'aerienne') {}

  public calculerFraisTransport(poids: number, distance: number): number {
    const tarif = this.tarifBase[this.typeTransport];
    return poids * distance * tarif;
  }

  public calculerFraisProduit(product: IProduct, distance: number): number {
    // Frais de base
    const fraisBase = this.calculerFraisTransport(product.poids, distance);
    
    // Frais spécifiques au produit (si c'est un AbstractProduct)
    let fraisSpecifiques = 0;
    if (product instanceof AbstractProduct) {
      fraisSpecifiques = product.calculerFraisSpecifiques(distance);
    }
    
    return fraisBase + fraisSpecifiques;
  }
}