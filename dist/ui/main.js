// Import des classes depuis le système compilé
import { ProductFactory } from '../factories/ProductFactory.js';
import { CargaisonFactory } from '../factories/CargaisonFactory.js';
import { Logger } from '../utils/Logger.js';
import { Formatter } from '../utils/Formatter.js';

class CargoManagementUI {
  constructor() {
    this.cargaisons = new Map();
    this.currentCargaison = null;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.updateProductTypeFields();
    this.updateUI();
  }

  setupEventListeners() {
    // Formulaire de création de cargaison
    document.getElementById('cargaison-form').addEventListener('submit', (e) => {
      e.preventDefault();
      this.createCargaison();
    });

    // Formulaire d'ajout de produit
    document.getElementById('product-form').addEventListener('submit', (e) => {
      e.preventDefault();
      this.addProduct();
    });

    // Changement de type de produit
    document.getElementById('product-type').addEventListener('change', () => {
      this.updateProductTypeFields();
    });
  }

  updateProductTypeFields() {
    const productType = document.getElementById('product-type').value;
    const extraFields = document.getElementById('extra-fields');
    
    let fieldsHTML = '';
    
    // Champs communs
    fieldsHTML += `
      <div class="space-y-2">
        <label for="product-libelle" class="text-sm font-medium text-gray-700 block">
          Libellé
        </label>
        <input type="text" id="product-libelle" 
               class="w-full rounded-lg border-gray-300 shadow-sm focus:border-gray-900 focus:ring-2 focus:ring-gray-900"
               placeholder="ex: Pommes Bio" required>
      </div>
    `;

    // Champs spécifiques selon le type
    switch (productType) {
      case 'chimique':
        fieldsHTML += `
          <div class="space-y-2">
            <label for="degre-toxicite" class="text-sm font-medium text-gray-700 block">
              Degré de Toxicité (1-10)
            </label>
            <input type="number" id="degre-toxicite" 
                   class="w-full rounded-lg border-gray-300 shadow-sm focus:border-gray-900 focus:ring-2 focus:ring-gray-900"
                   min="1" max="10" required>
          </div>
        `;
        break;
      case 'materiel':
        fieldsHTML += `
          <div class="grid grid-cols-2 gap-4">
            <div class="flex items-center">
              <input type="checkbox" id="is-fragile" class="rounded border-gray-300 text-gray-900 focus:ring-gray-900">
              <label for="is-fragile" class="ml-2 text-sm text-gray-700">Fragile</label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="is-cassable" class="rounded border-gray-300 text-gray-900 focus:ring-gray-900">
              <label for="is-cassable" class="ml-2 text-sm text-gray-700">Cassable</label>
            </div>
          </div>
        `;
        break;
    }

    extraFields.innerHTML = fieldsHTML;
  }

  createCargaison() {
    try {
      const type = document.getElementById('cargaison-type').value;
      const id = document.getElementById('cargaison-id').value;
      const distance = parseInt(document.getElementById('cargaison-distance').value);

      let cargaison;
      switch (type) {
        case 'routiere':
          cargaison = CargaisonFactory.createCargaisonRoutiere(id, distance);
          break;
        case 'maritime':
          cargaison = CargaisonFactory.createCargaisonMaritime(id, distance);
          break;
        case 'aerienne':
          cargaison = CargaisonFactory.createCargaisonAerienne(id, distance);
          break;
        default:
          throw new Error('Type de cargaison invalide');
      }

      this.cargaisons.set(id, cargaison);
      this.currentCargaison = cargaison;
      
      this.showToast(`Cargaison ${id} créée avec succès`, 'success');
      this.updateUI();
      document.getElementById('cargaison-form').reset();
      
    } catch (error) {
      this.showToast(`Erreur: ${error.message}`, 'error');
    }
  }

  addProduct() {
    if (!this.currentCargaison) {
      this.showToast('Veuillez d\'abord créer une cargaison', 'warning');
      return;
    }

    try {
      const type = document.getElementById('product-type').value;
      const id = document.getElementById('product-id').value;
      const libelle = document.getElementById('product-libelle').value;
      const poids = parseFloat(document.getElementById('product-weight').value);

      let product;
      switch (type) {
        case 'alimentaire':
          product = ProductFactory.createProductAlimentaire(id, libelle, poids);
          break;
        case 'chimique':
          const degreToxicite = parseInt(document.getElementById('degre-toxicite').value);
          product = ProductFactory.createProductChimique(id, libelle, poids, degreToxicite);
          break;
        case 'materiel':
          const isFragile = document.getElementById('is-fragile').checked;
          const isCassable = document.getElementById('is-cassable').checked;
          product = ProductFactory.createProductMateriel(id, libelle, poids, isFragile, isCassable);
          break;
        default:
          throw new Error('Type de produit invalide');
      }

      this.currentCargaison.ajouterProduit(product);
      this.showToast(`Produit ${libelle} ajouté avec succès`, 'success');
      this.updateUI();
      document.getElementById('product-form').reset();
      this.updateProductTypeFields();
      
    } catch (error) {
      this.showToast(`Erreur: ${error.message}`, 'error');
    }
  }

  updateUI() {
    const container = document.getElementById('cargaisons-container');
    
    if (this.cargaisons.size === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-12 text-gray-500">
          <div class="text-6xl mb-4">📦</div>
          <p class="text-lg">Aucune cargaison créée</p>
          <p class="text-sm">Créez votre première cargaison pour commencer</p>
        </div>
      `;
      return;
    }

    container.innerHTML = '';
    
    this.cargaisons.forEach((cargaison, id) => {
      const isActive = this.currentCargaison && this.currentCargaison.id === id;
      const card = this.createCargaisonCard(cargaison, isActive);
      container.appendChild(card);
    });
  }

  createCargaisonCard(cargaison, isActive) {
    const card = document.createElement('div');
    card.className = `bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all cursor-pointer border-2 ${
      isActive ? 'border-gray-900 ring-2 ring-gray-900 ring-opacity-20' : 'border-transparent hover:border-gray-200'
    }`;
    
    const typeIcons = {
      'routiere': '🚛',
      'maritime': '🚢',
      'aerienne': '✈️'
    };

    const typeColors = {
      'routiere': 'bg-green-100 text-green-800',
      'maritime': 'bg-blue-100 text-blue-800',
      'aerienne': 'bg-purple-100 text-purple-800'
    };

    card.innerHTML = `
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-center space-x-3">
          <div class="text-3xl">${typeIcons[cargaison.typeTransport]}</div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900">${cargaison.id}</h3>
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${typeColors[cargaison.typeTransport]}">
              ${cargaison.typeTransport.charAt(0).toUpperCase() + cargaison.typeTransport.slice(1)}
            </span>
          </div>
        </div>
        ${isActive ? '<div class="w-3 h-3 bg-gray-900 rounded-full"></div>' : ''}
      </div>

      <div class="space-y-3">
        <div class="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span class="text-gray-500">Distance:</span>
            <span class="font-medium ml-1">${Formatter.formatDistance(cargaison.distanceKm)}</span>
          </div>
          <div>
            <span class="text-gray-500">Produits:</span>
            <span class="font-medium ml-1">${cargaison.nbProduit()}</span>
          </div>
          <div>
            <span class="text-gray-500">Poids total:</span>
            <span class="font-medium ml-1">${Formatter.formatWeight(cargaison.sommeTotale())}</span>
          </div>
          <div>
            <span class="text-gray-500">Frais:</span>
            <span class="font-medium ml-1">${Formatter.formatPrice(cargaison.calculerFrais())}</span>
          </div>
        </div>

        ${cargaison.products.length > 0 ? `
          <div class="border-t pt-3">
            <h4 class="text-sm font-medium text-gray-700 mb-2">Produits:</h4>
            <div class="space-y-1 max-h-32 overflow-y-auto">
              ${cargaison.products.map(product => `
                <div class="text-xs text-gray-600 bg-gray-50 rounded px-2 py-1">
                  ${Formatter.formatProductSummary(product)}
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div class="border-t pt-3">
          <h4 class="text-sm font-medium text-gray-700 mb-2">Restrictions:</h4>
          <div class="space-y-1">
            ${cargaison.getRestrictions().map(restriction => `
              <div class="text-xs text-gray-600">• ${restriction}</div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      this.currentCargaison = cargaison;
      this.updateUI();
      this.showToast(`Cargaison ${cargaison.id} sélectionnée`, 'info');
    });

    return card;
  }

  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    
    const colors = {
      success: 'bg-green-500',
      error: 'bg-red-500',
      warning: 'bg-yellow-500',
      info: 'bg-blue-500'
    };

    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ'
    };

    toast.className = `${colors[type]} text-white px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full opacity-0 flex items-center space-x-3 max-w-sm`;
    toast.innerHTML = `
      <span class="text-lg">${icons[type]}</span>
      <span class="flex-1">${message}</span>
    `;

    container.appendChild(toast);

    // Animation d'entrée
    setTimeout(() => {
      toast.classList.remove('translate-x-full', 'opacity-0');
    }, 100);

    // Suppression automatique
    setTimeout(() => {
      toast.classList.add('translate-x-full', 'opacity-0');
      setTimeout(() => {
        if (container.contains(toast)) {
          container.removeChild(toast);
        }
      }, 300);
    }, 4000);
  }
}

// Initialisation de l'interface
document.addEventListener('DOMContentLoaded', () => {
  new CargoManagementUI();
});