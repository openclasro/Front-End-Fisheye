let CURRENT_INDEX = 0;
// creer une liste de likes
let LIKES = new Array();
async function getPhotographerById(id) {
  const data = await fetchPhotographers();
  const photographer = data.photographers.find((element) => element.id === id);
  return photographer;
}


async function fetchPhotographers() {
  const response = await fetch("../../data/photographers.json");
  const data = await response.json();
  return data;
}

async function init() {
  // console.log("execution init");
  // Récupère les datas des photographes
  // console.log("etape recuperation des donnees");
  const url_id = window.location.search;
  // console.log(url_id);
  const urlSearchParams = new URLSearchParams(url_id);
  // console.log(urlSearchParams);
  const leId = parseFloat(urlSearchParams.get("id"));
  // console.log(leId);

  const data = await fetchPhotographers();
  //  console.log(data);

  

  const photographer = data.photographers.find(
    (element) => element.id === leId
  );
  // console.log(photographer);

  // console.log(photographer);
  const photographerHeader = document.querySelector("#header");
  //  console.log(photographerHeader);
  const photographerHeader__content = document.createElement("div");
  // console.log(photographerHeader__content);
  photographerHeader__content.className = "photograph-header";
  photographerHeader__content.innerHTML = `
        
        
    <div tabindex="0"  classe="profil">
    <h1  tabindex="0">${photographer.name}</h1>
    <h2  tabindex="0">${photographer.city},${photographer.country}</h2>
    <p  tabindex="0">${photographer.tagline}</p>
    </div>
    <button  tabindex="0"      class="contact_button" aria-label="Contactez moi, ouvrir le formulaire" onclick="displayModal()">Contactez-moi</button>
    <img  tabindex="0" class="portrait" src="assets/Sample_Photos/ID/${photographer.portrait}" alt="photo de profil,${photographer.name}">`;

  photographerHeader.appendChild(photographerHeader__content);
}

// const hidden=document.querySelector(".hidden");

const btn = document.querySelector(".button-tri");
const option = document.querySelector(".list-option");
// const icon = document.querySelector("i");
let angleIcon = document.getElementById('angle');

btn.addEventListener("click", () => {
  window.location.hash = "";
  option.classList.toggle("active");
   btn.style.display = "none";
   window.location.hash = "#my-options";

   
  //  if(angleIcon.classList.contains("fa-angle-down")){
  //   angleIcon.className="fa-solid fa-angle-up";
  //  }else{
  //   angleIcon.className="fa-solid fa-angle-down";

  //  }
  
});

const optionTri = document.querySelectorAll(".option-tri");
//  console.log(optionTri);

optionTri.forEach((elt) => {
  elt.addEventListener("click", () => {
    btn.innerHTML = elt.innerHTML;
    btn.style.display = "block";
    option.classList.remove("active");
  });
});


// const dropdown = document.querySelector('.dropdown');
// dropdown.addEventListener('keydown',(event)=>{
//   if(event.key === "Enter"){
//     window.location.hash = "";
//   option.classList.toggle("active");
//    btn.style.display = "none";
//    window.location.hash = "#my-options";
//   }else if (event.key = "Escape"){
//     option.classList.remove("active");
//     btn.style.display = "block";
    
//   }
// })


function dynamicSort(property) {
  var sortOrder = -1;
  
  return function (a, b) {
    
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}
async function orderDisplayGallery() {
  const url_id = window.location.search;
  // console.log(url_id);
  const urlSearchParams = new URLSearchParams(url_id);
  // console.log(urlSearchParams);
  const leId = parseFloat(urlSearchParams.get("id"));
  // console.log(leId);

  const data = await fetchPhotographers();
  //  console.log(data);
  const photographer = data.photographers.find(
    (element) => element.id === leId
  );
  // console.log(photographer);

  const media = data.media.filter((element) => element.photographerId === leId);
  // console.log(media);

  const selectButton = document.querySelectorAll(".option-tri");

  selectButton.forEach((button) => {
    button.addEventListener("click", function () {
      const tireCritere = this.innerHTML;
      let sortedMedia = null;
      const photographerHeader = document.querySelector("#gallery");
      photographerHeader.innerHTML = "";
      console.log(tireCritere);
      // photographerHeader.removeChild(photographerHeader.lastElementChild);
      switch (tireCritere) {
        case "Titre":
          sortedMedia = media.sort(dynamicSort("title"));
          displaygallery(photographer, sortedMedia);
          
        
          break;
        case "Date":
          sortedMedia = media.sort(dynamicSort("date"));
          displaygallery(photographer, sortedMedia);
          

          break;
        case "Popularité":
          sortedMedia = media.sort(dynamicSort("likes"));
          displaygallery(photographer, sortedMedia);
          
          break;
        default:
          break;
      }
      window.location.hash = "#button-tri";
    });
  });


   displaygallery(photographer, media);
}

function displaygallery(photographer, media) {
  let gallery = "";

  media.map((element) => {
    if (!element.image) {
      return (gallery =
        gallery +
        `<div class="card">
    <video  tabindex="0"  id="${
      element.id
    }" controls class="image" ><source src="assets/Sample_Photos/${
          photographer.name.split(" ")[0]
        }/${element.video}" type="video/mp4" alt="${element.title}" aria-label="${element.title}" tabindex="0"> </video>
    <div class="discription">
     <h3 tabindex="0" class="title" role="titre" aria-label="${element.title}">${element.title}</h3>
     <div class="discription__like"> 
     <p  tabindex="0" class="likes" aria-label="Nombre de likes">${element.likes}</p>
     <span tabindex="0" class="like-heart" role="button" aria-label="likes"><i class="far fa-regular fa-heart" aria-hidden ="true"></i></span>
     </div>
     </div>
    </div>`);
    } else {
      return (gallery =
        gallery +
        `<div class="card" >
   <img   tabindex="0" id="${element.id}" class="image"  src="assets/Sample_Photos/${
          photographer.name.split(" ")[0]
        }/${element.image}" alt="${element.title} aria-label="${element.title}"  ></img>
   <div class="discription">
   <h3 tabindex="0" class="title" role="titre" aria-label="${element.title}">${element.title}</h3>
   <div class="discription__like"> 
   <p  tabindex="0" class="likes" aria-label="nombre de likes">${element.likes}</p>
   <span  tabindex="0" class="like-heart" role="button" aria-label="likes"><i class="far fa-regular fa-heart" aria-hidden ="true"></i></span>
   </div>
   </div>
   </div>`);
    }
  });


  

  const photographerHeader = document.querySelector("#gallery");
  const photographerMain = document.createElement("div");
  // // console.log(photographerHeader__content);
  photographerMain.className = "photos";
  photographerMain.innerHTML = gallery;

  photographerHeader.appendChild(photographerMain);
  
  //  intialiser la liste LIKES par des 0 suivant le nombre total des media de ce photograph
   LIKES = new Array();
   media.forEach(element => LIKES.push(0));
   
  const likeButton = document.querySelectorAll('.like-heart');
   
  likeButton.forEach((button,index) =>{

    button.addEventListener('keydown', (event)=>{
      // button.innerHTML = ""


      if(event.key==="Enter"){

        if(button.firstElementChild.classList.contains('fa-solid')){
          button.innerHTML = `<i class="far fa-regular fa-heart"></i>`;
        }else{
          button.innerHTML = `<i class="fas fa-solid fa-heart"></i>`;
        }
  

      const discriptionLikes = button.parentElement;
    
      
      if(LIKES[index]===0){
      
        discriptionLikes.firstElementChild.textContent = Number(discriptionLikes.firstElementChild.textContent) +1 ;
        LIKES[index]=1;
      }else{
        discriptionLikes.firstElementChild.textContent = Number(discriptionLikes.firstElementChild.textContent) -1 ;
        LIKES[index]=0;
      }
      // console.log(LIKES);

      
      let totallikes = 0;
      likeButton.forEach(like => 
        totallikes+=Number(like.parentElement.firstElementChild.textContent)
        
        );
      
      let totalLikesElement = document.getElementById('total-likes');
      totalLikesElement.textContent = totallikes;
    }
    });

    button.addEventListener('click', ()=>{
      // button.innerHTML = ""
     
      if(button.firstElementChild.classList.contains('fa-solid')){
        button.innerHTML = `<i class="far fa-regular fa-heart"></i>`;
      }else{
        button.innerHTML = `<i class="fas fa-solid fa-heart"></i>`;
      }

      const discriptionLikes = button.parentElement;
    
      
      if(LIKES[index]===0){
      
        discriptionLikes.firstElementChild.textContent = Number(discriptionLikes.firstElementChild.textContent) +1 ;
        LIKES[index]=1;
      }else{
        discriptionLikes.firstElementChild.textContent = Number(discriptionLikes.firstElementChild.textContent) -1 ;
        LIKES[index]=0;
      }
      // console.log(LIKES);

      
      let totallikes = 0;
      likeButton.forEach(like => 
        totallikes+=Number(like.parentElement.firstElementChild.textContent)
        
        );
      
      let totalLikesElement = document.getElementById('total-likes');
      totalLikesElement.textContent = totallikes;
    });

   
  })



  //ouverture et fermeture de la lightbox

  const lightBox = document.querySelector(".lightbox");
  

  document.querySelectorAll(".card img,video").forEach((element) => {
    element.addEventListener("click", () => {
      lightBox.style.display = "block";
    });
    document
      .querySelector(".next >button:nth-child(2) i")
      .addEventListener("click", () => {
        lightBox.style.display = "none";
      });
  });
  let picture = Array.from(
    document.querySelectorAll("#gallery .card img,video")
  );

  // console.log(picture);
  
  let newSrc = null;
  picture.forEach((element) => {

    element.addEventListener("keydown", (event)=>{

      if(event.key==="Enter"){
        window.location.hash = "";

                
        lightBox.style.display = "block";
        CURRENT_INDEX = media.findIndex(
          (element1) => element1.id === Number(element.id)
          
        );
        const image = media.filter((element1) => element1.id === Number(element.id))[0];
        if (element.tagName === "IMG") {
          newSrc = event.target.src;
          document.querySelector('.div-photo').innerHTML = `<img   tabindex="0"  class="image" active src="${newSrc}" alt="${image.title}" aria-label="${image.title}"/>
          <p tabindex="0">${image.title}</p>`;
        } else {
          newSrc = event.target.querySelector("source").src;
          document.querySelector('.div-photo').innerHTML = `<video  tabindex="0"  controls class="image"><source src="${newSrc}" alt="${image.title}" aria-label="${image.title}" type="video/mp4"> </video>  
          <p tabindex="0">${image.title}</p>`;
        }
      }

      window.location.hash = "#lightbox";


    });

    element.addEventListener("click", (e) => {

      window.location.hash = "";


      CURRENT_INDEX = media.findIndex(
        (element1) => element1.id === Number(element.id)
        
      );
      const image = media.filter((element1) => element1.id === Number(element.id))[0];
      
      if (element.tagName === "IMG") {
        newSrc = e.target.src;
        document.querySelector('.div-photo').innerHTML = `<img   tabindex="0" class="image" active src="${newSrc}" alt="${image.title}" aria-label="${image.title}"/>
        <p tabindex="0">${image.title}</p>`;
      } else {
        newSrc = e.target.querySelector("source").src;
        document.querySelector('.div-photo').innerHTML = `<video   tabindex="0"  controls class="image"><source src="${newSrc}" alt="${image.title}" aria-label="${image.title}" type="video/mp4"> </video>  
        <p tabindex="0">${image.title}</p>`;
      }


      window.location.hash = "#lightbox";

    });
  });
}

// affichage de la lightbox

async function lightbox() {
  const url_id = window.location.search;
  // console.log(url_id);
  const urlSearchParams = new URLSearchParams(url_id);
  // console.log(urlSearchParams);
  const leId = parseFloat(urlSearchParams.get("id"));
  // console.log(leId);

  const data = await fetchPhotographers();
  //  console.log(data);
  const photographer = data.photographers.find(
    (element) => element.id === leId
  );

  let media = data.media.filter((element) => element.photographerId === leId);
  // console.log(media);
  const lightBox = document.querySelector(".lightbox");
  const lightBox__content = document.createElement("div");
  lightBox__content.className = "content";

  // console.log(lightBox__content);
  lightBox__content.innerHTML = `
             <div    class="prev">
             <button  tabindex="0" >
             <i class="fa-solid fa-angle-left" aria-label="image precedente"></i>
             </button>
  
             </div>
             <div class="container">
             <div  class="picture">
             
  
             
             </div>
             
             </div>
             <div  class="next">
             <button  tabindex="0"> 
             <i class="fa-solid fa-angle-right" aria-label="image suivante"></i>
             </button>
             <button tabindex="0" ><i class="fa-solid fa-xmark" aria-alabel="button fermeture"></i></button>
             </div>
             
             `;
  lightBox.appendChild(lightBox__content);
  const content = document.querySelector(".picture");

  const photo = document.createElement("div");
  photo.className = "div-photo";
  content.appendChild(photo);  


  // console.log(media);

  let nextButton = document.querySelector(
    ".lightbox .content .next >button:first-of-type"
  );
  let prevButton = document.querySelector(
    ".lightbox .content .prev >button:first-of-type"
  );

  function displayLightBoxMedia(index) {
    let newImage = media[index];
    if (!newImage.hasOwnProperty("image")) {
      document.querySelector(
        ".div-photo"
      ).innerHTML = `<video   tabindex="0" controls class="image"> <source   src="assets/Sample_Photos/${
        photographer.name.split(" ")[0]
      }/${newImage.video}" type="video/mp4" alt="${newImage.title}" aria-label="${newImage.title}"></video>
      <p tabindex="0">${newImage.title}</p>`;
    } else {
      document.querySelector(
        ".div-photo"
      ).innerHTML = `<img   tabindex="0" class="image"   src="assets/Sample_Photos/${
        photographer.name.split(" ")[0]
      }/${newImage.image}"  alt="${newImage.title}" aria-label="${newImage.title}">
      <p tabindex="0">${newImage.title}</p>`;
    }
  }
  nextButton.addEventListener("click", () => {
    if (CURRENT_INDEX === media.length - 1) {
      CURRENT_INDEX = 0;
    } else {
      CURRENT_INDEX++;
    }
    displayLightBoxMedia(CURRENT_INDEX);
  });
 
  document.addEventListener('keydown', (event) => {
    var name = event.key;

    // si mon lightbox est off j'ignore les evenements clavier
    // console.log(lightBox.style.display);
    if(lightBox.style.display != 'block'){
      return ;
    }
    
     if(name==="Escape"){
      lightBox.style.display = "none";
    }
    if(name=="ArrowRight"){
      if (CURRENT_INDEX === media.length - 1) {
        CURRENT_INDEX = 0;
      } else {
        CURRENT_INDEX++;
      }
      displayLightBoxMedia(CURRENT_INDEX);
    } 
    if(name==="ArrowLeft") {
      if (CURRENT_INDEX === 0) {
        CURRENT_INDEX = media.length - 1;
      } else {
        CURRENT_INDEX--;
      }
      displayLightBoxMedia(CURRENT_INDEX);
    }
  }, false);


  prevButton.addEventListener("click", () => {
    if (CURRENT_INDEX === 0) {
      CURRENT_INDEX = media.length - 1;
    } else {
      CURRENT_INDEX--;
    }
    displayLightBoxMedia(CURRENT_INDEX);
  });

  //   });
}

async function displayModal() {
  const url_id = window.location.search;
  // console.log(url_id);
  const urlSearchParams = new URLSearchParams(url_id);
  // console.log(urlSearchParams);
  const leId = parseFloat(urlSearchParams.get("id"));
  // console.log(leId);

  const data = await fetchPhotographers();
  //  console.log(data);
  const photographer = data.photographers.find(
    (element) => element.id === leId
  );
  // console.log(photographer);
  const photographerHeader = photographer.name;
  const modalh3 = document.querySelector(".modal-header h2");
  // console.log(modalh3);
  modalh3.innerHTML = "Contactez-moi <br>" + photographerHeader;
}

async function aside() {
  const url_id = window.location.search;
  // console.log(url_id);
  const urlSearchParams = new URLSearchParams(url_id);
  // console.log(urlSearchParams);
  const leId = parseFloat(urlSearchParams.get("id"));
  // console.log(leId);

  const data = await fetchPhotographers();
  //  console.log(data);
  const photographer = data.photographers.find(
    (element) => element.id === leId
  );
  // const media=data.media.filter((element)=>element.photographerId === leId);
  const asideDvi = document.querySelector(".aside-div");

  // console.log(asideCentent);

  const asideCentent = ` <div  class="likes">
      <span id="total-likes" role="button" aria-label="total likes"> </span>
      <i class="fas fa-heart "></i>
      </div>
  
      <p aria-label="prix par jour">${photographer.price} €/jour </p>`;
  asideDvi.innerHTML = asideCentent;



  // get total likes 
  const likeButton = document.querySelectorAll('.like-heart');
  let totallikes=0;
  likeButton.forEach(like => 
    totallikes+=Number(like.parentElement.firstElementChild.textContent)
    
    );

    let totalLikesElement = document.getElementById('total-likes');
    totalLikesElement.textContent = totallikes;
}

init();
// displaygallery();
lightbox();
orderDisplayGallery();
displayModal();
aside();




