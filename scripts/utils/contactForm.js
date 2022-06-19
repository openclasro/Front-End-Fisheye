/* exported Form */


class Form {
  constructor(photographer) {
    const contact_button = document.querySelector('.contact_button');
    contact_button.addEventListener('click', () => this.displayModal(photographer));


    const close_modal = document.querySelector('#close_modal');
    close_modal.addEventListener('click', this.closeModal);

    this.handleEvent();
    this.handleSubmit();
  }

  displayModal(photographer) {
    const photographerHeader = photographer.name;
    const modalh3 = document.querySelector('.modal-header h2');

    modalh3.innerHTML = 'Contactez-moi <br>' + photographerHeader;

    // *  Afficher la Modal

    window.location.hash = '';

    const modal = document.getElementById('contact_modal');
    modal.style.display = 'block';
    
   //* close Modal

    const close_modal = document.querySelector('#close_modal');

    close_modal.addEventListener('keydown', (e) => {
      console.log(e);
      if (e.key === 'Enter') {
        this.closeModal();
      }
    });

    window.location.hash = '#contact_me';
    document.addEventListener('keydown', (e) => {
      if (modal.style.display === 'block') {
        if (e.key === 'Escape') {
          modal.style.display = 'none';
        }
      }
    });
  }

  closeModal() {
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'none';
  }


  
  handleSubmit() {
    let form = document.getElementById('loginForm');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let prenomInput = document.getElementById("prenom").value;
      console.log(prenomInput);
      let nomInput = document.getElementById("nom").value;
      console.log(nomInput);
      let emailInput = document.getElementById("email").value;
      console.log(emailInput);
      let textareaInput = document.getElementById("message").value;
      console.log(textareaInput);

      if (
        this.validPrenom(form.prenom) &
        this.validNom(form.nom) &
        this.validEmail(form.Email) &
        this.validMessage(form.message)
      ) {
        this.closeModal();
        form.reset();
      }
    });
  }

  handleEvent() {
    let form = document.getElementById('loginForm');
  

    // Ecouter la modification du prenom

    form.prenom.addEventListener('change', () => {
      this.validPrenom(form.prenom);
    });

    // Ecouter la modification du nom
    form.nom.addEventListener('change', () => {
      this.validNom(form.nom);
    });

    // Ecouter la modification de l email
    form.Email.addEventListener('change', () => {
      this.validEmail(form.Email);
    });
    // Ecouter la modification du champ text

    form.message.addEventListener('change', () => {
      this.validMessage(form.message);
    });
  }

  validPrenom(inputPrenom) {
    //REGEX POUR PRENOM

    let myRegex = /^[a-zA-Z-\s]{3,}$/;
    let testPrenom = myRegex.test(inputPrenom.value);
    let errorPrenom = document.getElementById('prenom-error');
    
    if (testPrenom) {
      errorPrenom.innerHTML = '';
    } else {
      errorPrenom.innerHTML = 'prénom non valide';
      errorPrenom.style.color = 'red';
    }
    return testPrenom;
  }

  validNom(inputNom) {
    //REGEX POUR NOM

    let myRegex = /^[a-zA-Z-\s]{3,}$/;
    let testNom = myRegex.test(inputNom.value);
    let errorNom = document.getElementById('nom-error');

    if (testNom) {
      errorNom.innerHTML = '';
    } else {
      errorNom.innerHTML = 'nom non valide';
      errorNom.style.color = 'red';
    }
    return testNom;
  }

  validEmail(inputEmail) {
    //REGEX POUR EMAIL

    let myRegexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let testEmail = myRegexEmail.test(inputEmail.value);
    let errorEmail = document.getElementById('Email-error');

    if (testEmail) {
      errorEmail.innerHTML = '';
    } else {
      errorEmail.innerHTML = 'email non valide';
      errorEmail.style.color = 'red';
    }
    return testEmail;
  }

  validMessage(inputMessage) {
    //REGEX POUR PRENOM

    let myRegex = /^[a-zA-Z-\s]{3,}$/;
    let testMessage = myRegex.test(inputMessage.value);
    let errorMessage = document.getElementById('message-error');

    if (testMessage) {
      errorMessage.innerHTML = '';
    } else {
      errorMessage.innerHTML = 'message non valide';
      errorMessage.style.color = 'red';
    }
    return testMessage;
  }

 
}
