var senha_cad=document.getElementById("senha_cad");
var TextoAlerta=document.getElementById("TextoAlerta");

senha_cad.addEventListener("keyup",function(event){
    if(event.getModifierState("CapsLock")){
        TextoAlerta.style.display="block";

    } else {
        TextoAlerta.style.display="none"
    }
})
