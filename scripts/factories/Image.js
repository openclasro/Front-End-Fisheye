/* exported Images */


class Images {
  constructor(data, photographerName) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.title = data.title;
    this.image = data.image;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
    this.index = data.index;
    this.photographerName = photographerName;

    this.liked = false;
  }

  like() {
    if (this.liked) {
      this.likes--;
    } else {
      this.likes++;
    }

    this.liked = !this.liked;
  }
  getMediaCardDOM() {
    const card = document.createElement('div');
    card.className = 'card';
   

    const pictureUrl = `assets/Sample_Photos/${
      this.photographerName.split(' ')[0]
    }/${this.image}`;
    const imgTag = document.createElement('img');
    imgTag.setAttribute('src', pictureUrl);
    imgTag.setAttribute('alt', this.title);
    imgTag.className = 'image';
    imgTag.id = this.id;
    imgTag.tabIndex = 0;
    card.appendChild(imgTag);

    const description = document.createElement('div');
    description.className = 'discription';
    // * title
    const title = document.createElement('h3');
    title.className = 'title';
    title.tabIndex = 0;
    //  title add role
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

    //* ajouter un listner pour gerer le comptage des likes

    likesIncon.addEventListener('click', LikesCounts);

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
