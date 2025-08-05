import { IProduct } from '../interfaces/IProduct';

export abstract class AbstractProduct implements IProduct {
  protected constructor(
    public readonly id: string,
    public readonly libelle: string,
    public readonly poids: number
  ) {
    this.validatePoids(poids);
  }

  private validatePoids(poids: number): void {
    if (poids <= 0) {
      throw new Error('Le poids doit être supérieur à 0');
    }
  }

  public abstract getType(): string;

  public abstract calculerFraisSpecifiques(distance: number): number;

  public getInfo(): string {
    return `${this.getType()} - ${this.libelle} (${this.poids}kg)`;
  }
}

