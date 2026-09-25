export class EdadAmigo {
    constructor(name, year, month, day){
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }

    retornarEdad(){
        const today = new Date();
        const birthday = new Date(this.year, this.month, this.day);

        let age = today.getFullYear() - birthday.getFullYear();
        const difMonth = today.getMonth() - birthday.getMonth();

        if (
            difMonth < 0 || (difMonth === 0 && today.getDate() < birthday.getDate())
        ){
            age --;
        }
        return `¡${this.name} tiene ${age} años hoy!`;
    }
}