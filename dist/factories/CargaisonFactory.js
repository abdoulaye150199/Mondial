"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargaisonFactory = void 0;
const CargaisonRoutiere_1 = require("../models/CargaisonRoutiere");
const CargaisonMaritime_1 = require("../models/CargaisonMaritime");
const CargaisonAerienne_1 = require("../models/CargaisonAerienne");
/**
 * Factory pour créer des cargaisons
 */
class CargaisonFactory {
    static createCargaisonRoutiere(id, distanceKm) {
        return new CargaisonRoutiere_1.CargaisonRoutiere(id, distanceKm);
    }
    static createCargaisonMaritime(id, distanceKm) {
        return new CargaisonMaritime_1.CargaisonMaritime(id, distanceKm);
    }
    static createCargaisonAerienne(id, distanceKm) {
        return new CargaisonAerienne_1.CargaisonAerienne(id, distanceKm);
    }
}
exports.CargaisonFactory = CargaisonFactory;
//# sourceMappingURL=CargaisonFactory.js.map