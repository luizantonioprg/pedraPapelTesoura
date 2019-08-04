// JAVASCRIPT 

function verificaEscolha(idDoElemento){


var divDoPlayer=document.getElementById("player");
var escolhaDaMaquina = Math.floor(Math.random() * 10);
var mostrarEscolhaDaMaquina = document.getElementById("computer");
var contador=0;


    if(idDoElemento=="pedra"){
    divDoPlayer.style.backgroundImage="url('images/rock-576682_640.png')";
        contador=1;
    }else if(idDoElemento=="papel"){
    divDoPlayer.style.backgroundImage="url('images/blank-1295186_640.png')";
        contador=2;
    }else{
    divDoPlayer.style.backgroundImage="url('images/avatar-2029577_640.png')";
        contador=3;
    }


        if(escolhaDaMaquina<3){ // PAPEL
            mostrarEscolhaDaMaquina.style.backgroundImage = "url('images/blank-1295186_640.png')";

        }else if(escolhaDaMaquina<7){ //TESOURA
            mostrarEscolhaDaMaquina.style.backgroundImage = "url('images/avatar-2029577_640.png')";
            

        }else{ // PEDRA
            mostrarEscolhaDaMaquina.style.backgroundImage = "url('images/rock-576682_640.png')";
        
        }
  if(contador==1 && escolhaDaMaquina<3){//PEDRA VS PAPEL
      alert('voce perdeu');
      document.getElementById("h4").style.opacity=1;

      setTimeout(function(){ 
          divDoPlayer.style.backgroundImage="";
          mostrarEscolhaDaMaquina.style.backgroundImage="";
          document.getElementById("h4").style.opacity=0;

          }, 3000);

  }else if(contador==1 && escolhaDaMaquina<7){//PEDRA VS TESOURA
      alert('voce ganhou');
      document.getElementById("h4").style.opacity=1;

      setTimeout(function(){ 
          divDoPlayer.style.backgroundImage="";
          mostrarEscolhaDaMaquina.style.backgroundImage="";
          document.getElementById("h4").style.opacity=0;

          }, 3000);

  }else if(contador==1 && escolhaDaMaquina>7){//PEDRA VS PEDRA
      alert('empatou');
      document.getElementById("h4").style.opacity=1;

      setTimeout(function(){ 
          divDoPlayer.style.backgroundImage="";
          mostrarEscolhaDaMaquina.style.backgroundImage="";
          document.getElementById("h4").style.opacity=0;

          }, 3000);

  }else if(contador==2 && escolhaDaMaquina<3){//PAPEL VS PAPEL
      alert('empatou');
      document.getElementById("h4").style.opacity=1;

      setTimeout(function(){ 
          divDoPlayer.style.backgroundImage="";
          mostrarEscolhaDaMaquina.style.backgroundImage="";
          document.getElementById("h4").style.opacity=0;

          }, 3000);

  }else if(contador==2 && escolhaDaMaquina<7){//PAPEL VS TESOURA
      alert('voce perdeu');
      document.getElementById("h4").style.opacity=1;

      setTimeout(function(){ 
          divDoPlayer.style.backgroundImage="";
          mostrarEscolhaDaMaquina.style.backgroundImage="";
          document.getElementById("h4").style.opacity=0;

          }, 3000);
  }else if(contador==2 && escolhaDaMaquina>7){//PAPEL VS PEDRA
      alert('voce venceu');
      document.getElementById("h4").style.opacity=1;

      setTimeout(function(){ 
          divDoPlayer.style.backgroundImage="";
          mostrarEscolhaDaMaquina.style.backgroundImage="";
          document.getElementById("h4").style.opacity=0;

          }, 3000);

  }else if(contador==3 && escolhaDaMaquina<3){//TESOURA VS PAPEL
      alert('voce venceu');
      document.getElementById("h4").style.opacity=1;

      setTimeout(function(){ 
          divDoPlayer.style.backgroundImage="";
          mostrarEscolhaDaMaquina.style.backgroundImage="";
          document.getElementById("h4").style.opacity=0;

          }, 3000);
  }else if(contador==3 && escolhaDaMaquina<7){//TESOURA VS TESOURA
      alert('empatou');
      document.getElementById("h4").style.opacity=1;

      setTimeout(function(){ 
          divDoPlayer.style.backgroundImage="";
          mostrarEscolhaDaMaquina.style.backgroundImage="";
          document.getElementById("h4").style.opacity=0;

          }, 3000);

  }else {//TESOURA VS PEDRA
      alert('voce perdeu');
      document.getElementById("h4").style.opacity=1;

      setTimeout(function(){ 
          divDoPlayer.style.backgroundImage="";
          mostrarEscolhaDaMaquina.style.backgroundImage="";
          document.getElementById("h4").style.opacity=0;

          }, 3000);

  }
}
