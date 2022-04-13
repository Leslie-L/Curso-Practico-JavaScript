//Cuadrao
function perimetroCuadraro(l){
    return l*4;
}
function areaCuadrado(l){
    return l*l;
}

//Triangulo
function perimetoTraingulo(l1,l2,l3) {
    return l1+l2+l3;
}
function areaTriagulo(base, altura) {
    return (1/2*(base*altura));
}
function alturaTriangulo(a,a1,b){
    if(a===a1){
        h= Math.sqrt((a**2-((b**2)/4)))
        return h;
    }   
    return -1;
}

//Circulo
function perimetroCirculo(radio) {
    return 2*radio*Math.PI;
}

function areaCirculo(radio) {
     return Math.PI*radio*radio;
}

//Interaccion con la pagina
function calcularAreaCuadrado() {
    var lado = document.getElementById("inputLadoCuadraro").value;
    var total = areaCuadrado(lado);
    resultadoCuadrado.innerText= "Resuldado: "+ total+" cm^2";
}
function calcularPerimetroCuadrado() {
    var lado = document.getElementById("inputLadoCuadraro").value;
    var total = perimetroCuadraro(lado);
    resultadoCuadrado.innerText= "Resuldado: "+ total+" cm";
}

function calcularAreaTriangulo() {
    var altura = document.getElementById("inputAltura").value;
    var base = document.getElementById("inputBase").value;
    
    var total = areaTriagulo(base,altura);
    resultadoTriangulo.innerText= "Resuldado: "+ total+" cm^2";
}
function calcularPerimetroTriangulo() {
    var lado1 = document.getElementById("inputLado1").value;
    var lado2 = document.getElementById("inputLado2").value;
    var base = document.getElementById("inputBase").value;
    var total = perimetoTraingulo(Number(lado1),Number(lado2),Number(base));
    resultadoTriangulo.innerText= "Resuldado: "+ total+" cm";
}

function calcularAlturaTriangulo() {
    var lado1 = document.getElementById("inputLado1").value;
    var lado2 = document.getElementById("inputLado2").value;
    var base = document.getElementById("inputBase").value;
    var total=alturaTriangulo(lado1,lado2,base);
    resultadoTriangulo.innerText= "Resuldado: "+ total+" cm";

}

function calcularAreaCirculo() {
    var radio = document.getElementById("inputRadio").value;
    var total = areaCirculo(radio);
    resultadoCirculo.innerText= "Resuldado: "+ total+" cm^2";
}

function calcularPerimetroCirculo() {
    var radio = document.getElementById("inputRadio").value;
    var total = perimetroCirculo(radio);
    resultadoCirculo.innerText= "Resuldado: "+ total+" cm";
}