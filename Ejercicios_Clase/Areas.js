function CalcularArea(){
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
    let resultado;
    let value = document.getElementById("triangulo").checked
    console.log(value);
    if (value==true){
        console.log("Estoy en el if")
        resultado = parseFloat(base)*parseFloat(altura)/2;
        document.getElementById("restultado").value=resultado;
    }else{
        console.log("Estoy en el else")
        resultado = parseFloat(base)*parseFloat(altura);
        document.getElementById("restultado").value=resultado;
    }
}
function Borrar(){
    document.getElementById("base").value=0;
    document.getElementById("altura").value=0;
    document.getElementById("resultado").value=0;
    document.getElementById("restultado").value=resultado;
}
