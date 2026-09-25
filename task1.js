export function calculadoraCosto(monto) {
    monto = Number(monto);
    return monto + 3 + (monto * 0.01);
}

console.log(calculadoraCosto(124))