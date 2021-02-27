const { linkSync } = require("fs")

(function (){
    /*-----------------------------------*/
    /* variables */
    /*-----------------------------------*/
    var pantalla = document.getElementById('pantalla')
    var btns = document.querySelectorAll('.calculadora button')

    var calcular = []
    
    /*-----------------------------------*/
    /* eventos */
    /*-----------------------------------*/
    btns.forEach(btn => {
        btn.addEventListener('click', calculadora)
    })

    /*-----------------------------------*/
    /* funciones */
    /*-----------------------------------*/
    function calculadora(e) {
        const btn = e.target
        const valor = btn.innerHTML
        
        if (!isNaN(valor)) {
            pantalla.value += valor
        } else {
            switch (valor) {
                case ",":
                    agregarComa()
                    break;
                case "+/-":
                    invertir()
                    break;
                case '<i class="fas fa-backspace"></i>':
                    borrar()
                    break;
                case 'C':
                    LimpiarPantalla()
                    break;
                case 'CE':
                    LimpiarPantalla()
                    resetearCalculadora()
                    break;
                default:
                    break;
            }
        }
    }
    function agregarComa() {
      const valorPantalla = pantalla.value
      
      if (valorPantalla.length == 0) {
          pantalla.value = "0,"
      } else if (!valorPantalla.includes(',')) {
          pantalla.value += ","
      }
    }
    function invertir() {
        const valorPantalla = pantalla.value
        var valorNuevo = "";

        if (valorPantalla.charAt(0) == '-') {
            for (let i = 1; i < valorPantalla.length; i++) {
                valorNuevo += valorPantalla.charAt(i)
            }
            pantalla.value = valorNuevo
        } else {
            pantalla.value = "-" + valorPantalla
        }
    }
    function borrar() {
        const valorPantalla = pantalla.value
        var valorNuevo = "";

        if (valorPantalla.length > 0) {
            for (let i = 0; i < valorPantalla.length - 1; i++) {
                valorNuevo += valorPantalla.charAt(i)
            }
        }
        pantalla.value = valorNuevo
    }
    function LimpiarPantalla() {
        pantalla.value = ""
    }
    function resetearCalculadora() {
        calcular = []
    }
}())