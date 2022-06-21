
/*global PhotographerFactory*/
/*eslint no-undef: "error"*/



async function getPhotographers() {
      
    console.log("début import des donnees");
  //Penser à remplacer par les données récupérées dans le json
  
  return fetch("../../data/photographers.json")
  .then(result=>result.json())
  .then(response=>response.photographers
  

  );
}






async function init() {

  const  photographers  = await getPhotographers();
  const photographerFactory = new PhotographerFactory(photographers);
  photographerFactory.displayData();


}



init();

 
  
  
      





  
  

  
      
  
  
  

  




  


  
    
    

    
        
    
    
    

    




    


    