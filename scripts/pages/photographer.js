







async  function fetchPhotographers(){
  // const url_id = window.location.search;
  // // console.log(url_id);
  // const urlSearchParams = new URLSearchParams(url_id);
  // // console.log(urlSearchParams);
  // const leId =parseFloat( urlSearchParams.get("id"));
  //   //  console.log(leId);
                      
                      
   return fetch("../../data/photographers.json")
  .then(result=>result.json())
  .then(response=>{response
  return response;} 
                      
                      
                      
                      
                      
  );} 
  //  fetchPhotographers()

// recuperer les information d'un photographe chaque qu'on rentre dans une page de detail photographe
//  recuperer les media de ce photogra

async function init() {

// console.log("execution init");
// Récupère les datas des photographes
// console.log("etape recuperation des donnees");
const url_id = window.location.search;
// console.log(url_id);
const urlSearchParams = new URLSearchParams(url_id);
// console.log(urlSearchParams);
const leId =parseFloat( urlSearchParams.get("id"));
console.log(leId);

const  data  = await fetchPhotographers();
//  console.log(data);
const photographer=data.photographers.find((element)=>element.id === leId);
console.log(photographer);
  
  
   
  
  // console.log(photographer);
  const photographerHeader = document.querySelector("#header");
  //  console.log(photographerHeader);
  const photographerHeader__content = document.createElement("div");
  // console.log(photographerHeader__content);
  photographerHeader__content.className = "photograph-header";
  photographerHeader__content.innerHTML =`
      
      
  <div classe="profil">
  <h1>${photographer.name}</h1>
  <h2>${photographer.city},${photographer.country}</h2>
  <p>${photographer.tagline}</p>
  </div>
  <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
  <img class="portrait" src="assets/Sample_Photos/ID/${photographer.portrait}">`
      
      
        
        
  //  function photograph(media){
  //   if( media.video){
  //     return  gallery = gallery +  `<div >
  //        <video class="image" src="assets/Sample_Photos/${photographer.name.split(" ")[0]}/${photographerId.video}">
  //     </div>`
  //   }else{
  //     return  gallery = gallery +  `<div>
  //        <img class="image" src="assets/Sample_Photos/${photographer.name.split(" ")[0]}/${photographerId.image}">
  //      </div>`
  //   }
  
  //  }
  // photograph(media);
  
  photographerHeader.appendChild(photographerHeader__content);
      
      
  };
            
              
            
  
  init();

  
  // const hidden=document.querySelector(".hidden");
 const  btn = document.querySelector("p");
  const option = document.querySelector(".list-option");
  
 btn.addEventListener("click", ()=>{
   option.classList.toggle("active");
   btn.style.display ="none";
   

 });
 const optionTri= document.querySelectorAll(".option-tri");
//  console.log(optionTri);

optionTri.forEach((elt)=>{
  elt.addEventListener("click",()=>{
    btn.innerHTML=elt.innerHTML;
    btn.style.display ="block";
    option.classList.remove("active");
  })

})


  async function displaygallery(){
  const url_id = window.location.search;
  // console.log(url_id);
  const urlSearchParams = new URLSearchParams(url_id);
  // console.log(urlSearchParams);
  const leId =parseFloat( urlSearchParams.get("id"));
  console.log(leId);
        
  const  data  = await fetchPhotographers();
  //  console.log(data);
  const photographer=data.photographers.find((element)=>element.id === leId);
  console.log(photographer);
           
   const media=data.media.filter((element)=>element.photographerId === leId);
   console.log(media);

  
      


   
  
 
   let gallery ="";

        
media.map((element)=>{
  if(!element.image){
    return gallery= gallery + `<div class="card" >
  <video  controls class="image"><source src="assets/Sample_Photos/${photographer.name.split(" ")[0]}/${element.video}" type="video/mp4"> </video>
  <div class="discription">
   <h3 class="title">${element.title}</h3>
   <div class="discription__like"> 
   <p class="likes">${element.likes}</p>
   <span class="like-heart"><i class="fas fa-solid fa-heart" aria-hidden ="true"></i></span>
   </div>
   </div>
  </div>`}
  
  else{
    return gallery = gallery +   `<div class="card">
 <img  class="image"  src="assets/Sample_Photos/${photographer.name.split(" ")[0]}/${element.image}"></img>
 <div class="discription">
 <h3 class="title">${element.title}</h3>
 <div class="discription__like"> 
 <p class="likes">${element.likes}</p>
 <span class="like-heart"><i class="fas fa-solid fa-heart" aria-hidden ="true"></i></span>
 </div>
 </div>
 </div>`}

});
  
 const photographerHeader = document.querySelector("#gallery");
 const photographerMain = document.createElement("div");
// // console.log(photographerHeader__content);
 photographerMain.className = "photos";
 photographerMain.innerHTML = gallery;
  
   photographerHeader.appendChild(photographerMain);
  
   };

   displaygallery();

  // affichage de la lightbox

   async function lightbox(){
    const url_id = window.location.search;
    // console.log(url_id);
    const urlSearchParams = new URLSearchParams(url_id);
    // console.log(urlSearchParams);
    const leId =parseFloat( urlSearchParams.get("id"));
    console.log(leId);
          
    const  data  = await fetchPhotographers();
    //  console.log(data);
    const photographer=data.photographers.find((element)=>element.id === leId);
    console.log(photographer);
             
     let media=data.media.filter((element)=>element.photographerId === leId);
    console.log(media);
     const lightBox = document.querySelector(".lightbox");
     const lightBox__content = document.createElement("div");
     lightBox__content.className="content";

     console.log(lightBox__content);
           lightBox__content.innerHTML = `
           <div class="prev">
           <button>
           <i class="fa-solid fa-angle-left"></i>
           </button>

           </div>
           <div class="container">
           <div class="picture">
           

           
           </div>
           </div>
           <div class="next">
           <button>
           <i class="fa-solid fa-angle-right"></i>
           </button>
           <button><i class="fa-solid fa-xmark"></i></button>
           </div>
           
           `
        lightBox.appendChild(lightBox__content);

        document.querySelectorAll(".card").forEach((element)=>{
        element.addEventListener("click",()=>{

        lightBox.style.display ="block";
         
       })
        document.querySelector(".next >button:nth-child(2) i").addEventListener("click",()=>{
        lightBox.style.display ="none";

        })


       
      })
       let picture = Array.from(document.querySelectorAll("#gallery .card img,video"));

       console.log(picture);
     
      
       const content = document.querySelector(".picture");

      const photo = document.createElement("div");
      console.log(photo);
      photo.className = "div-photo";
    
      
      
      let newSrc =null;
      picture.forEach((element)=>{
        element.addEventListener("click",(e)=>{

          console.log(newSrc);
          console.log(element.tagName)
          
          if(element.tagName==="IMG"){
            
            newSrc=e.target.src;
             photo.innerHTML=`<img class="image" active src="${newSrc}"/>
            <p>${element.title}</p>`
          }
          else{
            newSrc=e.target.querySelector("source").src;
           photo.innerHTML= `<video  controls class="image"><source src="${newSrc}" type="video/mp4"> </video>`
          }
          content.appendChild(photo);
     
        })

    });
      console.log(media);

     
      let  nextButton =document.querySelector(".lightbox .content .next >button:first-of-type");
      console.log(nextButton)
       nextButton.addEventListener("click",()=>{
      let index=0;
      let newIndex=index++;
        
       index=media.findIndex((el)=>{
        if(el.image){
         return  el.image == newSrc.split("/")[6];
        }else{
         return  el.video==newSrc.split("/")[6];
        }
        });
         
         
      //  console.log(index)
       function next(index){

         let newImage=media[index++];
         console.log(newImage)
       document.querySelector(".image").src=photo.innerHTML=`<img  class="image"  src="${newImage}"`
        console.log(image)
         
        //  nextButton.addEventListener("click",() => next(newIndex));
       }
       nextButton.addEventListener("click",()=>next(newIndex++));
   
    });


  //    const  lightBox__image = document.createElement("img");
  //    lightBox__image.className="lightbox-image";
  //   //  lightBox__image.setAttribute=("src",current_img);
  //    const lightBox__video = document.createElement("div");
  //    lightBox__video.className = "lightbox-video";
  //    const lightBox__close = document.createElement("div");
  //    lightBox__close.className = "lightbox-button lightbox-close";
  //    lightBox__close.innerHTML = `&times; `
  //    const lightBox__next = document.createElement("div");
  //    lightBox__next.className = "lightbox-button lightbox-next";
  //    lightBox__next.innerHTML =`&#10095;`;
  //    const lightBox__prev = document.createElement("div");
  //    lightBox__prev.className = "lightbox-button lightbox-prev";
  //    lightBox__prev.innerHTML = `&#10094;`
     
  //    lightBox.appendChild(lightBox__image);
  //    lightBox.appendChild(lightBox__video);
  //    lightBox.appendChild(lightBox__close);
  //    lightBox.appendChild(lightBox__next);
  //    lightBox.appendChild(lightBox__prev);

  //    const lightBoxImage = document.querySelector(".lightbox-image");
  //    const lightBoxVideo = document.querySelector(".lightbox-video");
  //    let current_img;
  //    let target;
  //   document.querySelectorAll(".card").forEach(function(imagesCollection){
  //   const listImg =[...imagesCollection.querySelectorAll("#gallery .card img,video")];
  //   console.log(listImg);
  //   totalImg = listImg.length;

  //   imagesCollection.addEventListener("click",(e)=>{
  //     e.preventDefault();
  //     let target = e.target;
  //     current_img = target.src;

  //     if(target.tagName === "IMG"){
  //       // lightBoxImage.innerHTML=`<img class="image" active src="${target.currentSrc}" `
  //        lightBoxImage.src=target.src;
  //       lightBox.classList.add("show");
  //     }else{
  //       lightBoxVideo.innerHTML=`<video  controls class="image"><source src="${target.currentSrc}" type="video/mp4"> </video> `;
  //       lightBox.classList.add("show");
  //     }
  //   })

    
  //   })

  //   function closeLightBox(){
  //     lightBox.classList.remove("show");
  //   }

  //   function nextImage(){
  //     let i;
  //     let nextElement = document.querySelector(current_img).parentNode.nextElementSibling ;
  //     console.log(nextElement);
  //     if(nextElement){
  //       displayMedia(nextElement)
  //     }
      
  //   }
  //   function prevImage(){
  //     let prevElement = document.querySelector(current_img).parentNode.previousElementSibling;
  //     if(prevElement){
  //       displayMedia(prevElement)
  //     }
  //   }
  //   function displayMedia(typeMedia){
  //     if(typeMedia.getElementsByTagName("img").length){
  //       lightBoxVideo.innerHTML ="";
  //       lightBoxImage.src = typeMedia.querySelector("img").src;
  //       current_img = typeMedia.querySelector("img").src;
  //     }else{
  //       lightBoxImage.innerHTML ="";
  //       lightBoxVideo.innerHTML = `<video  controls class="image"><source src="${typeMedia.querySelector("video").currentSrc}" type="video/mp4"> </video> `;
  //       lightBox.classList.add("show");
  //       current_img = typeMedia.querySelector("video").src;
  //     }
  //   }
  //   const index=media.findIndex(el=>el.image===current_img)
  //   console.log(index)
  //   console.log(current_img)
  //   document.querySelector(".lightbox-close").addEventListener("click",closeLightBox);
  //   document.querySelector(".lightbox-next").addEventListener("click",nextImage(index++));
  //   document.querySelector(".lightbox-prev").addEventListener("click",prevImage(index--));
     
   }
  lightbox()
      


   async function displayModal(){
    const url_id = window.location.search;
    // console.log(url_id);
    const urlSearchParams = new URLSearchParams(url_id);
    // console.log(urlSearchParams);
    const leId =parseFloat( urlSearchParams.get("id"));
    // console.log(leId);
          
    const  data  = await fetchPhotographers();
    //  console.log(data);
    const photographer=data.photographers.find((element)=>element.id === leId);
    // console.log(photographer);
     const photographerHeader=photographer.name;
    const modalh3 =document.querySelector(".modal-header h2");
    // console.log(modalh3);
      modalh3.innerHTML= "Contactez-moi <br>" + photographerHeader;

    //  // ouverture et fermeture de la modal

    //  const contactModal = document.getElementById("main .photograph-header .contact_button");
    //  console.log(contactModal)
    //  const closeModal = document.getElementById("close_modal");
    //  console.log(closeModal);
    //  const submitForm = document.getElementsByClassName(".submit_button");
    //  const modal = document.getElementsByClassName(".modal");
    //  //lancement de la modal
    //  contactModal.addEventListener("click",()=>{

    //   contactModal.style.display="block";
    //  })

    //  // fermeture de la modal
    //  closeModal.addEventListener("click",()=>{
    //     contactModal.style.display="none";

    //  })

    //  submitForm.addEventListener("click",()=>{
    //    contactModal.style.display="block";
    //  })


   }
  //     displayModal();  
      
  // async function aside(){
  //   const url_id = window.location.search;
  //   // console.log(url_id);
  //   const urlSearchParams = new URLSearchParams(url_id);
  //   // console.log(urlSearchParams);
  //   const leId =parseFloat( urlSearchParams.get("id"));
  //   // console.log(leId);
          
  //   const  data  = await fetchPhotographers();
  //   //  console.log(data);
  //   const photographer=data.photographers.find((element)=>element.id === leId);
  //   // const media=data.media.filter((element)=>element.photographerId === leId);
  //   const asideDvi=document.querySelector(".aside-div");
   
  //   // console.log(asideCentent);

  //  const   asideCentent =` <div class="likes">
  //   <span> likes</span>
  //   <i class="fas fa-heart "></i>
  //   </div>

  //   <p>${photographer.price} /jour</p>`
  //  asideDvi.innerHTML=asideCentent;
  // }
  // aside();
          
          
          
          
          

  // const url_id = window.location.search;
  // console.log(url_id);
  // const urlSearchParams = new URLSearchParams(url_id);
  // console.log(urlSearchParams);
  // const leId = urlSearchParams.get("id");
  // console.log(leId);
  // const fetchPhotographers= async()=>{

  //   return fetch("../../data/photographers.json")
  //   .then(result=>result.json())
  //   .then(response=>{const data=response
  //    console.log(data)
  //  })
  // }

  // //fetchPhotographers()

  //  async function getPhotographersData(leId){
  //  data=  fetchPhotographers()

  //    const selecPhotographer=data.photographers.find((element)=>element.id===leId);
  //    console.log(selecPhotographer);
   

    
  //  }
  //  getPhotographersData()




  