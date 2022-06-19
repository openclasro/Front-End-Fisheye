/* exported Lightbox */
/*global LightboxContainer, LightboxFactory*/
/*eslint no-undef: "error"*/
class Lightbox {
    // Init a new lightbox object based on the clicked media
    static init () {     
          
        const generatedDOMMedias = Array.from(document.querySelectorAll(".card img, video"));

        
        const generatedDOMTitles = Array.from(document.querySelectorAll('.title'));



        const tabUrls = generatedDOMMedias.map(media => media.getAttribute('src'));
      
        const titles = generatedDOMTitles.map(title => title.innerText);

        
        for (let i=0; i < generatedDOMMedias.length; i++ ) {
            const media = generatedDOMMedias[i];
            const mediaUrl = media.getAttribute('src');   
            const title = titles[i];
            media.addEventListener("click", () => {
                const beforeElementFocus = document.activeElement;
                new Lightbox (mediaUrl, tabUrls, title, titles, beforeElementFocus);
            })
            media.addEventListener("keydown", (e) => {
                if (e.key === " " || e.key === "Enter") {
                    media.click();
                    e.preventDefault();
                }
            })
        }
    }
    constructor (mediaUrl, tabLinks, title, tabTitles, beforeElementFocus) {
        this.mediaUrl = mediaUrl;
        this.tabLinks = tabLinks;
        this.title = title;
        this.tabTitles = tabTitles;
        this.beforeElementFocus = beforeElementFocus;
        this.main = document.querySelector("main");

        const buildLightbox = new LightboxContainer();
        this.lightbox = buildLightbox.buildDOM();
        this.main.appendChild(this.lightbox);
        this.lightbox.focus();
        
        this.leftArrow = document.querySelector(".previous");
        this.rightArrow = document.querySelector(".next");
        this.closeIcon = document.querySelector(".close");

        this.displayLightboxContent(mediaUrl, title);
        this.manageEvent();
        this.keyboardNav();
    }
    displayLightboxContent (mediaUrl, title) {
        const contentContainer = this.lightbox.querySelector(".lightbox-content div");
        const extension = mediaUrl.split('.').pop();
        const lightboxContent = new LightboxFactory (extension, mediaUrl, title);
        contentContainer.innerHTML = lightboxContent.buildDOM(); 
        this.mediaUrl = mediaUrl;

        // masquer la page d'arrière plan du focus
        Array.from(this.main.children).forEach(child => {
            if (child !== this.lightbox) {
                child.inert = true;
            }
        })
    }
    manageEvent () {
        this.leftArrow.addEventListener("click", (e) => {
            e.stopPropagation();
            this.previous();
        });
        this.rightArrow.addEventListener("click", (e) => {
            e.stopPropagation();
            this.next();
        });
        this.closeIcon.addEventListener("click", (e) => {
            e.stopPropagation();
            this.close(this.beforeElementFocus);
        });
    }
    keyboardNav () {
        this.lightbox.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                this.close(this.beforeElementFocus);
            }
            else if (e.key === "ArrowLeft") {
                this.previous();
            }
            else if (e.key === "ArrowRight") {
                this.next();
            }
            else if (e.key === "Tab" && this.closeIcon.contains(document.activeElement)) {
                e.preventDefault();
                document.querySelector(".previous").focus();
            }
        });
    }
    next () {
        let currentIndex = this.tabLinks.findIndex(mediaUrl => mediaUrl == this.mediaUrl);

        if (currentIndex == this.tabLinks.length - 1) {
            currentIndex = -1;
        }
        this.displayLightboxContent(this.tabLinks[currentIndex + 1], this.tabTitles[currentIndex + 1]);
    }
    previous () {
        let currentIndex = this.tabLinks.findIndex(mediaUrl => mediaUrl == this.mediaUrl);
        if (currentIndex == 0) {
            currentIndex = this.tabLinks.length;
        }
        this.displayLightboxContent(this.tabLinks[currentIndex - 1], this.tabTitles[currentIndex - 1]);
    }
    close (beforeElementFocus) {
        this.lightbox.remove();

        // rendre la page focalisable a nouveau
        Array.from(this.main.children).forEach(child => {
            if (child !== this.lightbox) {
                child.inert = false;
            }
        })
        if (beforeElementFocus != undefined) {
            beforeElementFocus.focus();
        }
    }
}