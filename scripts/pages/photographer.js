/*global  Lightbox, Form, HeaderPhotographerFactory, GalleryManager, SidePhotographerFactory*/
/*eslint no-undef: "error"*/


async function fetchPhotographers() {
  const response = await fetch('../../data/photographers.json');
  const data = await response.json();
  console.log(data)
  return data;
}




  

async function init() {
  const url_id = window.location.search;

  const urlSearchParams = new URLSearchParams(url_id);

  const leId = parseFloat(urlSearchParams.get('id'));

  const data = await fetchPhotographers();

  const photographer = data.photographers.find(
    (element) => element.id === leId
  );

  const media = data.media.filter((element) => element.photographerId === leId);
  console.log(media)
   const headerphotographer = new HeaderPhotographerFactory(photographer);
   headerphotographer.init();

  new GalleryManager(media,photographer);
  const sidePhotographerFactory = new SidePhotographerFactory(photographer);
  sidePhotographerFactory.init();
  Lightbox.init();
  new Form(photographer);
}

init();
