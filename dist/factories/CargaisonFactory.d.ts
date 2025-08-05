import { CargaisonRoutiere } from '../models/CargaisonRoutiere';
import { CargaisonMaritime } from '../models/CargaisonMaritime';
import { CargaisonAerienne } from '../models/CargaisonAerienne';
/**
 * Factory pour créer des cargaisons
 */
export declare class CargaisonFactory {
    static createCargaisonRoutiere(id: string, distanceKm: number): CargaisonRoutiere;
    static createCargaisonMaritime(id: string, distanceKm: number): CargaisonMaritime;
    static createCargaisonAerienne(id: string, distanceKm: number): CargaisonAerienne;
}
//# sourceMappingURL=CargaisonFactory.d.ts.map