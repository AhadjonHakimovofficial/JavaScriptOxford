function Calculator() {
    this.read = function() {
        this.a = +prompt("bitta son kiriting:");
        this.b = +prompt("Ikkinchisini kiriting:");
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.ayirmasi = function(){
        return this.a - this.b;
    }

    this.mul = function() {
        return this.a * this.b;
    };

    this.nisbat = function() {
        return this.a / this.b;
    }
}

let calculator = new Calculator();
calculator.read();

alert("Yig'indisi = " + calculator.sum());
alert("Ayirsi = " + calculator.ayirmasi());
alert("Ko'paytmasi = " + calculator.mul());
alert("bo'linmasi = " + calculator.nisbat());