  /* exported LightboxImg */

 
 class LightboxImg {
    constructor (imageLink, title){
        this.imageLink = imageLink;
        this.title = title;
    }
    buildDOM () {
        const lightbox = `
            <img tabindex="0" src="${this.imageLink}" alt="${this.title}"/>
            <p tabindex="0">${this.title}</p>`
        return lightbox;
    }
}