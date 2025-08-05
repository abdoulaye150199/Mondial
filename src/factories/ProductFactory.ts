import { ProductAlimentaire } from '../models/ProductAlimentaire';
import { ProductChimique } from '../models/ProductChimique';
import { ProductMateriel } from '../models/ProductMateriel';

export class ProductFactory {
  public static createProductAlimentaire(
    id: string,
    libelle: string,
    poids: number
  ): ProductAlimentaire {
    return new ProductAlimentaire(id, libelle, poids);
  }

  public static createProductChimique(
    id: string,
    libelle: string,
    poids: number,
    degreToxicite: number
  ): ProductChimique {
    return new ProductChimique(id, libelle, poids, degreToxicite);
  }

  public static createProductMateriel(
    id: string,
    libelle: string,
    poids: number,
    isFragile: boolean,
    isCassable: boolean
  ): ProductMateriel {
    return new ProductMateriel(id, libelle, poids, isFragile, isCassable);
  }
}