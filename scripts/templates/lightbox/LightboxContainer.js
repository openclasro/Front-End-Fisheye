 /* exported LightboxContainer */

 
 class LightboxContainer {
    buildDOM () {
        const lightbox = document.createElement("div");
        lightbox.classList = "lightbox";
        lightbox.setAttribute("aria-label","affichage de l'image");
        lightbox.setAttribute("role","dialog");
        lightbox.setAttribute("tabindex","-1");
        lightbox.innerHTML = `
            <div class="lightbox-left">
                <button class="previous" aria-label="Image précédente"><em class="fas fa-angle-left"></em></button>
            </div>
            <div class="lightbox-content">
                <div>
                </div>
            </div>
            <div class="lightbox-right">
                <button class="next" aria-label="Image suivante"><em class="fas fa-angle-right"></em></button>
                <button class="close" aria-label="Fermer la lightbox"><em class="fa-solid fa-xmark"></em></button>
            </div>`
        return lightbox;
    }
}