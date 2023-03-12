export function formatPrice(price) {
    return price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
}
