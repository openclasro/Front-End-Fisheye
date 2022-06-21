
/* exported PhotographerFactory */
class PhotographerFactory{
    
    constructor(data){
        this.data = data;

    }

  photographerFactory(photographer) {
    console.log("construction de la card photographe");
  const {id, name, city,country,tagline,price, portrait } =photographer;

  const picture = `assets/Sample_Photos/ID/${portrait} `;
  console.log("recuperation des photos");

  function getUserCardDOM() {
    
      const article = document.createElement( 'article' );
      const link = document.createElement('a');
      link.className ="card__link";
      link.href =`photographer.html?id=${id} `;
      const img = document.createElement( 'img' );
      img.className = "img__portrait";
      img.setAttribute("src",picture);
      img.setAttribute("alt",`image de profil,${name} `)
      const h2 = document.createElement( 'h2' );
      h2.textContent = name.toUpperCase() ;
      h2.tabIndex = 0;
      const p = document.createElement('p');
      p.className ="card__city";
      p.textContent= city + "," + country;
      p.setAttribute("aria-label",`${city,country}`)
      p.tabIndex =0 ;
      const tag = document.createElement('p');
      tag.className ="card__tagline";
      tag.textContent = tagline;
      tag.setAttribute("aria-label",`${tagline}`)
      tag.tabIndex =0 ;
      const prix = document.createElement('p');
      prix.className = "card__price";
      prix.textContent=price + "€/jour";
      prix.setAttribute("aria-label",`${price +"€/jour"}`)
      prix.tabIndex =0;
      article.appendChild(link);
      link.appendChild(img);
      link.appendChild(h2);
      article.appendChild(p);
      article.appendChild(tag);
      article.appendChild(prix);

      return (article);
  }
  return { name, picture,price, getUserCardDOM }

  }
   displayData() {

    
    const photographersSection = document.querySelector(".photographer_section");
     

    this.data.forEach((photographer) => {
        const photographerModel = this.photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
    

}
}