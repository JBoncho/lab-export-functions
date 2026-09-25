export function rubricaAprobadoReprobado(punctuation) {
    punctuation = Number (punctuation);

    if (punctuation >=5){
        return "Aprobado";
    }

    return "Reprobado";
}