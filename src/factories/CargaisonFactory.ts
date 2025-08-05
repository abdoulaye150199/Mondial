import { CargaisonRoutiere } from '../models/CargaisonRoutiere';
import { CargaisonMaritime } from '../models/CargaisonMaritime';
import { CargaisonAerienne } from '../models/CargaisonAerienne';


export class CargaisonFactory {
  public static createCargaisonRoutiere(id: string, distanceKm: number): CargaisonRoutiere {
    return new CargaisonRoutiere(id, distanceKm);
  }

  public static createCargaisonMaritime(id: string, distanceKm: number): CargaisonMaritime {
    return new CargaisonMaritime(id, distanceKm);
  }

  public static createCargaisonAerienne(id: string, distanceKm: number): CargaisonAerienne {
    return new CargaisonAerienne(id, distanceKm);
  }
}