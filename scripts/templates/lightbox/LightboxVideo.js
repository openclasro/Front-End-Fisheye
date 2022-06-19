 /* exported LightboxVideo */
 
 class LightboxVideo {
    constructor (videoLink, title) {
        this.videoLink = videoLink;
        this.title = title;
    }
    buildDOM () {
        const lightbox = `
            <video tabindex="0" controls aria-label="${this.title}">
                <source src="${this.videoLink}" type="video/mp4">
            </video>
            <p tabindex="0">${this.title}</p>`
        return lightbox;
    }
}