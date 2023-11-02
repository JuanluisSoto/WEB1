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
    alert("Dentro de la tirada del bot");
    let rand=Math.random()*100;
    let num=parseInt(rand%3);
    alert("resultado bot " + arrMano[num]);
    return arrMano[num];
}

function Tirada(j1, j2){
    let res_player1 = parseInt(document.getElementById("Res_1").textContent);
    let res_player2 = parseInt(document.getElementById("Res_2").textContent);
    
    if(j1==j2){
        alert("empate");
    }else{
        switch(j1){
            case "Piedra":
                if(j2=="Papel"){
                    let resultado = res_player2+1;
                    document.getElementById("Res_2").textContent=resultado;
                }else{
                    let resultado =res_player1+1;
                    document.getElementById("Res_1").textContent =resultado;
                }
            break;
            case "Papel":
                if(j2=="Tijera"){
                    let resultado =res_player2+1;
                    document.getElementById("Res_2").textContent =resultado;
                }else{
                    let resultado =res_player1+1;
                    document.getElementById("Res_1").textContent =resultado;
                }
            break;
            case "Tijera":
                if(j2=="Piedra"){
                    let resultado =res_player2+1;
                    document.getElementById("Res_2").textContent =resultado;
                }else{
                    let resultado =res_player1+1;
                    document.getElementById("Res_1").textContent =resultado;
                }
            break;
            default:
                alert("error en la opcion de mano")
            break;
        }
    }
}

function Finalizar(){
    let res_player1 = parseInt(document.getElementById("Res_1").textContent);
    let res_player2 = parseInt(document.getElementById("Res_2").textContent);
    if(res_player1==res_player2){
        document.getElementById("winner").textContent="Ha habido un empate";
    }else if(res_player1>res_player2){
        document.getElementById("winner").textContent="1";
    }else if(res_player1<res_player2){
        document.getElementById("winner").textContent="2";
    }
    setInterval(Reincio(),10000);
}
function Reincio(){
    document.getElementById("Res_2").textContent=0;
    document.getElementById("Res_1").textContent=0;
}
