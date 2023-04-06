//Problema: Permitir que una persona se vacune,
//si cumple con:
//1.- mayor de 18 años
//2.- embarazada con + de 90 semanas de gestación, mayor de 18 años
//3.- persona mayor o igual de 30 años este años

//<script type="text/javascript">

//let nombre=window.prompt("Ingresa tu Nombre");
//alert("Bienvenido "+ nombre);
//console.log("Hola ", nombre);
//console.log("Que edad Tienes?");

//console.log(window);
//alert("Hola esto es una alerta");
//confirm("Hola esto es una confirmación");
//prompt("Hola esto es un aviso y le permite al usuario ingresar un valor");


//if (edad>= 18) {
  //  console.log("Te puedes vacunar");
//}
//console.log(edad);
//var edad=promt("Ingresa tu edad");

//alert("Bienvenid@ "+ nombre+" "+edad);

//</script>

//console.log("Hola ", prompt("Dime tu nombre"));

//document.write("Mi Vacunación" + "<br />");
//console.log("Hola ", prompt("Dime tu nombre"));
//prompt("Dime tu edad");



// 1er caso:
let ernesto = 18;
if (ernesto >= 18){
    console.log("Se puede vacunar");
}

//2do caso:
let leticia = 27;
let embarazada = true;
let semanas_de_gestacion = 9.5;

if (leticia > 18 && semanas_de_gestacion > 9) {
  console.log("Se puede vacunar");
}

if (leticia > 18) {
    if (embarazada) {
        if (semanas_de_gestacion > 9) {
            console.log("Se puede vacunar");
        }
    }
    console.log("Se puede vacunar");
}



// 3er caso
let fernando = 29;
let cumpleEsteAnho = false;
if (fernando >= 30 || cumpleEsteAnho){
    console.log("Se puede vacunar");
}


//var edad = null;

//if (var >= 18) {
  //  console.log("edad", prompt("es mayor a 18 año, si se puede vacunar"));
    //} else{ 
      //  console.log("edad", prompt("es menor a 18 años, no se puede vacunar"));
//    }

  //  var embarazada = true;
    //var = null;