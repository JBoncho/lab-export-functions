export function calculadoraEdad(year, month, day) {
    const today = new Date();
    const birthday = new Date(year, month, day);

    let age = today.getFullYear() - birthday.getFullYear();
    const difMonth = today.getMonth() - birthday.getMonth();

    if(
        difMonth <0 ||
        (difMonth === 0 && today.getDate() < birthday.getDate())
    ){
        age--;
    }
    return age;
}