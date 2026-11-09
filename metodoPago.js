export function debito(subtotal){ // el debito no tiene ningun recargo 
    const total = subtotal;
    return total;
}

export function credito(subtotal){ // el credito tiene un recargo del 10%
    const total = subtotal + (subtotal * 0.10);
    return total;
}

export function efectivo(subtotal){
    const total = subtotal - (subtotal * 0.05); // el efectivo tiene un descuento del 5%
    return total;
}