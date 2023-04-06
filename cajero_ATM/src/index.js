let cant = 0;
let nombre = "saldo";

function saldo() {
    if (cant <= 10) {
        return saldo + "No ppuedes dejar tu cuenta en menos de $10"
    } else if (cant >= 990) {
        return saldo + ""No ppuedes tener mas de $990""
    }
}
saldo()
