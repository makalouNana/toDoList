//selecteurs
const toAdd = document.querySelector('.toAdd');
const add = document.querySelector('.add');
const toDoList = document.querySelector('.toDoList')
let resultat = null  
let valid = false



//evenements
//ajout de tace
add.addEventListener("click", (e) => {
    e.preventDefault();

    if(valid){
    //creation
    const conteneur = document.createElement('div')
    const Input = document.createElement('div')
    const conteneurOutils = document.createElement('div')
    toDoList.appendChild(conteneur);
    conteneur.appendChild(Input)
    Input.textContent = resultat;
    //div delete
    const suppression = document.createElement('button')
   conteneur.appendChild(suppression);
    suppression.textContent = 'delete';

    //compete button
    const complete = document.createElement('button')
   conteneur.appendChild(complete);
    complete.textContent = 'complete';

    //modify div
//     const modify = document.createElement('button')
//    conteneur.appendChild(modify);
//     modify.textContent = 'modify';

    //outils 
    conteneur.appendChild(conteneurOutils)
    conteneurOutils.appendChild(complete)
    conteneurOutils.appendChild(suppression)


    //stylisation
    conteneur.classList.add('conteneur');
    conteneurOutils.classList.add('conteneurOutils')

    //réunitialisation
    

    }else{
        alert('tache non valide')
    }
    toAdd.value = ""
    resultat=null
    valid=false
   })

   toAdd.addEventListener("input", (e) => {
    resultat = e.target.value
    console.log(resultat);
    console.log(e);
    if((resultat != null) && (e.data != " "))  {
        valid = true
    }
    console.log(valid)
   })
      
   //Suppresion , modifucation et ou suppression
   toDoList.addEventListener("click" , (e) => {
    let option = e.target
    if( option.textContent == 'complete'){
         option = option.parentElement.parentElement
         option.classList.toggle('complet')  
//option.innerHTML += `<input type="checkbox" checked>`
    }else if(option.textContent = "delete"){
        option.parentElement.parentElement.classList.add('remove')
       
        setTimeout(() =>{
            option.parentElement.parentElement.remove()
        },500)
    }
   })


//fonctions