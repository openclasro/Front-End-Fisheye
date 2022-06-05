

/* exported displayModal */

/*global fetchPhotographers */
/*eslint no-undef: "error"*/

async function displayModal() {
    // * pour afficher le nom du photographe 
    const url_id = window.location.search;
    
    const urlSearchParams = new URLSearchParams(url_id);
    
    const leId = parseFloat(urlSearchParams.get("id"));
  
    const data = await fetchPhotographers();
    
    const photographer = data.photographers.find(
      (element) => element.id === leId
    );
    
    const photographerHeader = photographer.name;
    const modalh3 = document.querySelector(".modal-header h2");
    
    modalh3.innerHTML = "Contactez-moi <br>" + photographerHeader;
    
    
    // * pour afficher la Modal
    
    window.location.hash = "";

    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";

    const close_modal = document.querySelector('#close_modal');

    close_modal.addEventListener("keydown",(e)=>{

        console.log(e);
            if(e.key==="Enter"){
                closeModal();
            }
            
        

    })

    window.location.hash = "#contact_me";
    document.addEventListener('keydown',(e)=>{
        if(modal.style.display==="block"){
            if(e.key==="Escape"){
                modal.style.display='none';
                
            }
            
        }

    });


}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}



let form = document.getElementById("loginForm");
console.log(form);

// Ecouter la modification du prenom

form.prenom.addEventListener("change",function(){
    validPrenom(this);
});
console.log(form.prenom)

// Ecouter la modification du nom
form.nom.addEventListener("change",function(){
    validNom(this);
});

// Ecouter la modification de l email
form.Email.addEventListener("change",function(){
    validEmail(this);
});
// Ecouter la modification du champ text

form.message.addEventListener("change",function(){
    validMessage(this);
});
// Validation du champ prénom
const validPrenom = function(inputPrenom){
    //REGEX POUR PRENOM
    
    let myRegex =/^[a-zA-Z-\s]{3,}$/;
    let testPrenom = myRegex.test(inputPrenom.value);
    let errorPrenom = document.getElementById("prenom-error");
    console.log(errorPrenom)
  
    if(testPrenom){
    errorPrenom.innerHTML="";
    
    }else{
    errorPrenom.innerHTML="prénom non valide";
    errorPrenom.style.color="red";
    }
    return testPrenom;
    }

    // Validation du champ nom

    const validNom = function(inputNom){
        //REGEX POUR NOM
        
        let myRegex =/^[a-zA-Z-\s]{3,}$/;
        let testNom = myRegex.test(inputNom.value);
        let errorNom = document.getElementById("nom-error");
        console.log(errorNom)
      
        if(testNom){
        errorNom.innerHTML="";
        
        }else{
        errorNom.innerHTML="nom non valide";
        errorNom.style.color="red";
        }
        return testNom;
        }


        // Validation du champ email

        const validEmail = function(inputEmail){
  
            //REGEX POUR EMAIL
           
            let myRegexEmail =/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            let testEmail = myRegexEmail.test(inputEmail.value);
            let errorEmail = document.getElementById("Email-error");
          
          
          
            if(testEmail){
            errorEmail.innerHTML="";
            
            }else{
            errorEmail.innerHTML="email non valide";
            errorEmail.style.color="red";
            }
            return testEmail;
          };



          const validMessage = function(inputMessage){
            //REGEX POUR PRENOM
            
            let myRegex =/^[a-zA-Z-\s]{3,}$/;
            let testMessage= myRegex.test(inputMessage.value);
            let errorMessage = document.getElementById("message-error");
            console.log(errorMessage)
            console.log(testMessage)
          
            if(testMessage){
            errorMessage.innerHTML="";
            
            }else{
            errorMessage.innerHTML="message non valide";
            errorMessage.style.color="red";
            }
            return testMessage;
            }
           



            form.addEventListener("submit",function(e){
                e.preventDefault();
                
                if(validPrenom(form.prenom) & validNom(form.nom) & validEmail(form.Email) & validMessage(form.message)){
                    closeModal();
                    form.reset();

                }

            })


