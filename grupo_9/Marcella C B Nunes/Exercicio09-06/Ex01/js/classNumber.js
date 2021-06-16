class number {
    constructor (numberA,numberB) {
        this.numberA = numberA;
        this.numberB = numberB;
        
    }

    getNumberA() {
        return this.numberA;
    }
    getNumberB(){
        return this.numberB;
    }
    soma(){
        return parseInt(this.numberA, 10) + parseInt(this.numberB, 10);
    }
    calculaMaior(){
        if (this.numberA > this.numberB){
            document.getElementById("mostra").style.color = "blue";
            return "Primeiro maior";
        }
        if(this.numberA<this.numberB){
            document.getElementById("mostra").style.color = "red";
            return "Segundo maior"
        }
        document.getElementById("mostra").style.color = "yellow";
        return "Iguais"
    }
    
}