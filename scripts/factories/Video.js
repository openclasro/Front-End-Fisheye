/* exported Videos */

class Videos {
  constructor(data, photographerName) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.title = data.title;
    this.video = data.video;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
    this.index = data.index;

    this.photographerName = photographerName;
  }
  getMediaCardDOM() {

    const videoUrl = `assets/Sample_Photos/${
      this.photographerName.split(' ')[0]
    }/${this.video}`;


    const card = document.createElement('div');
    card.className = 'card';

    const videoTag = document.createElement('video');

    videoTag.id = this.id;
    videoTag.className = 'image';
    videoTag.setAttribute('src', videoUrl);

    videoTag.controls = "controls";

   
    const sourceTage = document.createElement('source');
    sourceTage.setAttribute('src', videoUrl);
    sourceTage.setAttribute('alt', this.title);
    sourceTage.setAttribute('type', "video/mp4");
    
    videoTag.appendChild(sourceTage);
    card.appendChild(videoTag);

    const description = document.createElement('div');
    description.className = 'discription';
    description.tabIndex = 0;

    // * title
    
    const title = document.createElement('h3');
    title.className = 'title';
    title.tabIndex = 0;
    title.innerHTML = this.title;

    const descriptionLikes = document.createElement('div');
    descriptionLikes.className = 'discription__like';
   


    // * likes number
    const likesNumber = document.createElement('p');
    likesNumber.className = 'likes';
    likesNumber.innerHTML = this.likes;
    likesNumber.tabIndex = 0;

    // * heart icon

    const likesIncon = document.createElement('span');
    likesIncon.className = 'like-heart';
    likesIncon.innerHTML = '<em class="far fa-regular fa-heart" ></em>';
    likesIncon.tabIndex = 0;

    likesIncon.addEventListener('click',LikesCounts);
    likesIncon.addEventListener('keydown',e=>{
      if (e.key==="Enter"){

        likesIncon.click();

      }
    });
    function LikesCounts(){

      if(likesIncon.firstElementChild.classList.contains('fa-solid')){
        likesIncon.innerHTML = `<em class="far fa-regular fa-heart"></em>`;
      }else{
        likesIncon.innerHTML = `<em class="fas fa-solid fa-heart"></em>`;
      }

      let totalLikesElement = document.getElementById('total-likes');
      const discriptionLikes = likesIncon.parentElement;
      if(!this.liked){

        discriptionLikes.firstElementChild.textContent = Number(discriptionLikes.firstElementChild.textContent) +1 ;
        totalLikesElement.textContent = Number(totalLikesElement.textContent) +1 ;
        

      }else{
        discriptionLikes.firstElementChild.textContent = Number(discriptionLikes.firstElementChild.textContent) -1 ;
        totalLikesElement.textContent = Number(totalLikesElement.textContent) -1 ;
      }

      this.liked = !this.liked;

    }


    descriptionLikes.appendChild(likesNumber);
    descriptionLikes.appendChild(likesIncon);

    description.appendChild(title);
    description.appendChild(descriptionLikes);

    card.appendChild(description);

    return card;
  }

  
}
