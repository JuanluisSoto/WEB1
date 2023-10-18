function Play(){
    alert("Boton jugar pulsado")
    let mano=document.getElementById("mano").value;
    let rand=Math.random()*100;
    let num=parseInt(rand%3);
    alert(mano+" "+num);

    switch(num){
        case mano==arrMano[num]:
            alert(empate);
        break;
        case mano!=arrMano[num]:
            
        break;
    }
};

function Borrar(){
    alert("Boton borrar pulsado")
}