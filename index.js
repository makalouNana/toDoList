//RéCUPéRATION DES BALISES
const ajoutInput = document.querySelector('.ajoutInput');
const AjoutBouton = document.querySelector('.AjoutBouton');
const allTask = document.querySelector('.allTask')
// les variables 
let tache = "";
let toDoInput
let tacheList



//fonctions

//fonctions permettant de recuperer l'input
const tacheRecuperation = (e) =>{
    tache = e.target.value
}


// Fonction d'ajout d'une tache

const tacheAjout = () =>{
    if(taskControle()){     
    //
    tacheList = document.createElement('div')
    allTask.appendChild(tacheList)
    tacheList.classList.add('tacheList')
    //ajout de l'icons complete
    valider = document.createElement('div')
    valider.innerHTML= `<ion-icon  name="toggle-outline"></ion-icon>`
    tacheList.appendChild(valider)
    //Ajout du conteneur de la tach
    toDoInput = document.createElement("input")
    toDoInput.value = tache
    tacheList.appendChild(toDoInput)
    toDoInput.classList.add('ajoutInput')
    //Ajout de l'icone delete
    trash = document.createElement('div')
    trash.innerHTML= `<ion-icon class="trash" name="trash-outline"></ion-icon>`
    trash.style.color = "red"
    tacheList.appendChild(trash)
    //reinitialisation
    // ajoutInput.value = ""
    }
    trash.addEventListener("click", deleteTask) 
    valider.addEventListener("click", validTask)
}

//fonction de controle

const taskControle = () =>{
    console.log("esss")
    if(tache == "" || (tache.toLocaleLowerCase()==tache.toUpperCase())){
        alert("task no valid")
        return false;
    }
    return true
}

const validTask = (e) => {
    e.target.parentElement.parentElement.classList.toggle('valider')  
    e.target.classList.toggle('valider2')
}

const deleteTask = (e) =>{
    e.target.parentElement.parentElement.remove()
} 



//evenement
ajoutInput.addEventListener("input" ,tacheRecuperation)
AjoutBouton.addEventListener("click" , tacheAjout)
