
/* exported LightboxFactory */
/*global LightboxImg, LightboxVideo*/
/*eslint no-undef: "error"*/
class LightboxFactory {
    constructor (extension, mediaLink, title){
        switch (extension){
            case "jpg" :
                return new LightboxImg (mediaLink, title);
            case "mp4" : 
                return new LightboxVideo (mediaLink, title);
        }
    }
}