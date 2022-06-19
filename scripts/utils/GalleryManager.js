
/* exported GalleryManager */
/*global MediasFactory, Lightbox */
/*eslint no-undef: "error"*/

class GalleryManager{

    constructor(media,photographer){
        this.media = media;
        this.photographer  = photographer;
        this.critaires = {"Popularité":"likes","Date":"date","Titre":"title"}
        this.initTriSelectButton();
        this.displaygallery();
        this.handleTriEvent();


    }

    initTriSelectButton(){
        const btn = document.querySelector('.button-tri');
        const option = document.querySelector('.list-option');
      
        let angleIcon = document.getElementById('angle1');
      
        btn.addEventListener('click', () => {
          window.location.hash = '';
          option.classList.toggle('active');
          btn.style.display = 'none';
          angleIcon.style.display = 'none';
      
          window.location.hash = '#my-options';
        });
      
        const optionTri = document.querySelectorAll('.option-tri');
        optionTri.forEach((elt) => {
          elt.addEventListener('click', () => {
            btn.innerHTML = elt.innerHTML;
            angleIcon.style.display = 'block';
            btn.style.display = 'block';
            option.classList.remove('active');
          });
        });

    }
    clearGallery(){
        const photographerHeader = document.querySelector('#gallery');
        photographerHeader.innerHTML = '';
    }
    handleTriEvent(){
        const optionTri = document.querySelectorAll('.option-tri');
      
        optionTri.forEach((button) => {
          button.addEventListener('click',  ()=> {
            const tireCritere = button.innerHTML;
            this.clearGallery();
            this.triGallery(this.critaires[tireCritere]);
            this.displaygallery();
            Lightbox.init();
            
          });
        });
    }

    dynamicSort(property) {
        let sortOrder = -1;
      
        return function (a, b) {
          let result =
            a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
          return result * sortOrder;
        };
      }
    

      triGallery(property){
        const tempMedia = this.media.sort(this.dynamicSort(property));
        console.log(tempMedia);
      }  


     displaygallery() {
        const photographerHeader = document.querySelector('#gallery');
        const photographerMain = document.createElement('div');
        photographerMain.className = 'photos';
      
      
        this.media.forEach((element) => {
          const mediaDOM = new MediasFactory(element, this.photographer.name);
    
          photographerMain.appendChild(mediaDOM.getMediaCardDOM());
        });
      
        photographerHeader.appendChild(photographerMain);
      }
}