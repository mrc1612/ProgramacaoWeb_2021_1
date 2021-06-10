class calculo {
    constructor (cNum1, cNum2) {
        this.num1 = cNum1;
        this.num2 = cNum2;
    }

    getNum1() {
        return this.cNum1;
    }
	
	getNum2() {
        return this.cNum2;
    }

    soma() {
        return parseInt(this.num1, 10) + parseInt(this.num2, 10);
    }

	calculoMaior(){
		if(this.num1 > this.num2){
			document.getElementById("mostra").style.color = "red";
			return "Primeiro numero é maior";
		}
		else if(this.num1 < this.num2){
			document.getElementById("mostra").style.color = "green";
			return "Segundo numero é maior";
		}
		else{
			document.getElementById("mostra").style.color = "blue";
			return "Ambos são iguais";
		}
	}
}