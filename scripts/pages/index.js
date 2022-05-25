


function photographerFactory(data) {
    console.log("construction de la card photographe");
  const {id, name, city,country,tagline,price, portrait } = data;

  const picture = `assets/Sample_Photos/ID/${portrait} `;
  console.log("recuperation des photos");

  function getUserCardDOM() {
      //debugger;
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

  async function getPhotographers() {
      
      console.log("début import des donnees");
    //Penser à remplacer par les données récupérées dans le json
    
    return fetch("../../data/photographers.json")
    .then(result=>result.json())
    .then(response=>response.photographers
    

    );
}
   
    
    
        
async function displayData(photographers) {

    console.log("etape 4  debut injection de l html");
    const photographersSection = document.querySelector(".photographer_section");
     

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
    console.log("fin d injection de l html");

};

async function init() {

    console.log("execution init");
    // Récupère les datas des photographes
    console.log("etape recuperation des donnees");

    

    const  photographers  = await getPhotographers();
    displayData(photographers);


};
console.log("etape 1: debut  init")

init();
console.log("fin init");
    
    

    
        
    
    
    

    




    


    