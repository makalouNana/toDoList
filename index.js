//RéCUPéRATION DES BALISES
const ajoutInput = document.querySelector('.ajoutInput');
const AjoutBouton = document.querySelector('.AjoutBouton');
const allTask = document.querySelector('.allTask')
// les variables 
let tache = "";
let toDoInput

//fonctions

//fonctions permettant de recuperer l'input
const tacheRecuperation = (e) =>{
    tache = e.target.value
}


// Fonction d'ajout d'une tache

const tacheAjout = () =>{
    //
    const tacheList = document.createElement('div')
    allTask.appendChild(tacheList)
    tacheList.classList.add('tacheList')
    //ajout de l'icons complete
    const valider = document.createElement('span')
    valider.innerHTML= `<ion-icon  name="toggle-outline"></ion-icon>`
    tacheList.appendChild(valider)
    //Ajout du conteneur de la tach
    toDoInput = document.createElement("input")
    toDoInput.defaultValue = tache
    tacheList.appendChild(toDoInput)
   toDoInput.classList.add('ajoutInput')
      //Ajout de l'icone delete
   const trash = document.createElement('span')
   trash.innerHTML= `<ion-icon class="trash" name="trash-outline"></ion-icon>`
   tacheList.innerHTML += `<ion-icon name="trash-outline"></ion-icon>`
    //reinitialisation

    ajoutInput.value = ""
}







//evenement


ajoutInput.addEventListener("input" ,tacheRecuperation)
AjoutBouton.addEventListener("click" , tacheAjout)