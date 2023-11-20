function verify (){
    var messageerreur = document.getElementById ('messageerreur');
    var Email = document.querySelector("#exampleInputEmail1");
    var Password = document.querySelector("#exampleInputPassword1");
    messageerreur.style.display = "block" ;
    console.log (Email.value, Password.value) 
    if
    (Email.value ==""|| Password.value==""){
        messageerreur.classList.add("alert-danger");
        document.getElementById('messageerreur').innerHTML = "Veuillez renseigner votre nom d'utilisateur aissi que votre mot de passe.";
    }
    else{
        messageerreur.style.display = "none" ;
    }
}

