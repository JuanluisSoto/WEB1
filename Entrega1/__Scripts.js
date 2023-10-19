var arrMano=["Piedra","Papel","Tijera"];

//alert ("Java ha cargado");

function Play(){
    let value0 = document.getElementById("0").checked;
    let value1 = document.getElementById("1").checked;
    let value2 = document.getElementById("2").checked;

    let j1;
    let j2;

    if(value0==true){
        alert("No juega nadie");
        j1=TiradaBot();
        j2=TiradaBot();
        document.getElementById("Player_1").value=j1;
        document.getElementById("Player_2").value=j2;
        Tirada(j1,j2);
    }else if(value1==true){
        alert("Solo juega un jugador");
        j1=document.getElementById("Player_1").value;
        j2=TiradaBot();
        document.getElementById("Player_2").value=j2;
        Tirada(j1,j2);
    }else if(value2==true){
        alert("Juegan dos jugadores");
        j1=document.getElementById("Player_1").value;
        j2=document.getElementById("Player_2").value;
        Tirada(j1,j2);
    }else{
        alert("algo falla en la cantidad de jugadores");
    }
}

function TiradaBot(){
    let rand=Math.random()*100;
    let num=parseInt(rand%3);
    return arrMano[num];
}

function Tirada(j1, j2){
    if(j1==j2){
        alert("empate");
    }else{
        switch(j1){
            case "Piedra":
                if(j2=="Papel"){
                    alert("gana J2");
                }else{
                    alert("gana J1");
                }
            break;
            case "Papel":
                if(j2=="Tijera"){
                    alert("gana J2");
                }else{
                    alert("gana J1");
                }
            break;
            case "Tijera":
                if(j2=="Piedra"){
                    alert("gana J2");
                }else{
                    alert("gana J1");
                }
            break;
            default:
                alert("error en la opcion de mano")
            break;
        }
    }
}

function Borrar(){
    alert("Boton borrar pulsado")
}