 class Api{
  constructor(url){
  this._url =url
}
  async getMedias(){
  return fetch(this._url)
  .then(result =>result.json())
  .then(result=>result.media)
  .catch(error=>console.log(error))   
  
}

    


async getPhotographers(){
  return fetch(this._url)
 .then(result=>result.json())
  
  

  .then(result=>result.photographers)
  .catch(error=>console.log(error))
}

}
