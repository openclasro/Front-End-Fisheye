/* exported SidePhotographerFactory */


class SidePhotographerFactory{


    constructor(photographer){
        this.photographer = photographer;
    }

    init(){
        const asideDvi = document.querySelector(".aside-div");
        const asideCentent = this.getDOM();
        asideDvi.innerHTML = asideCentent;
        this.initLikes();
    }
    initLikes(){
    const likeButton = document.querySelectorAll('.like-heart');
    let totallikes=0;
    likeButton.forEach(like => 
      totallikes+=Number(like.parentElement.firstElementChild.textContent)
      
      );
  
      let totalLikesElement = document.getElementById('total-likes');
      totalLikesElement.textContent = totallikes;
    }
    getDOM(){
        const asideCentent = ` <div tabindex="0" class="likes">
        <span  tabindex="0" id="total-likes" role="button" aria-label="total likes"> </span>
        <em class="fas fa-heart "></em>
        </div>
    
        <p  tabindex="0" aria-label="prix par jour">${this.photographer.price} €/jour </p>`;
                
                
      
        return    asideCentent;
    }
}


  