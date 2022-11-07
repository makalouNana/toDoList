//RéCUPéRATION DES BALISES
const ajoutInput = document.querySelector('.ajoutInput');
const AjoutBouton = document.querySelector('.AjoutBouton');
const tacheList = document.querySelector('.tacheList')
// les variables 

let tache = "";





//fonctions

//fonctions permettant de recuperer l'input
const tacheRecuperation = (e) =>{
    tache = e.target.value
}


// Fonction d'ajout d'une tache

const tacheAjout = () =>{
    //ajout de l'icons complete
    let valider = document.createElement('span')
    valider.innerHTML= `<ion-icon name="toggle-outline"></ion-icon>`
    tacheList.appendChild(valider)
    //Ajout du conteneur de la tach
   let toDoInput = document.createElement("input")
   toDoInput.value = tache
   tacheList.appendChild(toDoInput)
   ajoutInput.value = ""
   //Ajout de l'icone delete
   let trash = document.createElement('span')
   trash.innerHTML= `<ion-icon class="delete"name="trash-outline"></ion-icon>`
   tacheList.innerHTML += `<ion-icon class="delete"name="trash-outline"></ion-icon>`
//    tacheList.classList.add('task')
}







//evenement


ajoutInput.addEventListener("input" ,tacheRecuperation)
AjoutBouton.addEventListener("click" , tacheAjout)