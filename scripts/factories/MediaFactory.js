/* exported MediasFactory */
/*global Videos, Images*/
/*eslint no-undef: "error"*/
class MediasFactory {
    constructor (media,photographerName){
        if ("video" in media) {
            return new Videos(media,photographerName);
        } else {
            return new Images(media,photographerName);
        }
    }
}