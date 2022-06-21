/* exported HeaderPhotographerFactory */


class HeaderPhotographerFactory{


    constructor(photographer){
        this.photographer = photographer;
    }

    init(){
        const photographerHeader = document.querySelector('#header');
        const photographerHeader__content = this.getDOM()
        photographerHeader.appendChild(photographerHeader__content);
    }

    getDOM(){
        const photographerHeader__content = document.createElement('div');
        photographerHeader__content.className = 'photograph-header';
        photographerHeader__content.innerHTML = `
      
        <div  class="profil">
        <h1  tabindex="0">${this.photographer.name}</h1>
        <h2  tabindex="0">${this.photographer.city},${this.photographer.country}</h2>
        <p  tabindex="0">${this.photographer.tagline}</p>
        </div>
        <button  tabindex="0"    class="contact_button" aria-label="Contactez moi, ouvrir le formulaire">Contactez-moi</button>
        <img  tabindex="0" class="portrait" src="assets/Sample_Photos/ID/${this.photographer.portrait}" alt="photo de profil du photographer"${this.photographer.name}">`;
                
                
      
        return    photographerHeader__content;
    }
}


  