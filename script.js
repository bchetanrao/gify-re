const giphy_api_key = "DGBskRLgWTdXCUFW66yuyeEelLwevAfL";

/* GIPHY - Search Endpoint(Search GIFs using a keyword)*/

function getGifs() {
  /* GIPHY API Key */
  const gif = document.getElementById("gifs").value;
  const search_endpoint = `https://api.giphy.com/v1/gifs/search?q=${gif}&api_key=${giphy_api_key}&limit=50`;

  /* Fetching Data from the API */
  fetch(search_endpoint)
    .then(api_res => api_res.json())
    .then(api_output => {
      const gif_array = api_output.data.map(gif => gif.images.downsized.url);

      /* Outputing a <img> element for every GIFs */
      const gifs = gif_array.map(
          gif => `<a onclick="share('${gif}')"><img src=${gif} alt="searched gifs"></a>`
        )
        .join();
      /* Displaying the output */
      document.getElementById("display_gif").innerHTML = gifs;
    })
    .catch(err => console.log(err));
}

// perform search on pressing enter key
document.getElementById("search_gif").addEventListener("click", getGifs);

var input = document.getElementById("gifs");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("search_gif").click();
  }
});


/*  GIPHY -Trending Endpoint (Fetch GIFs currently trending online) */

const trending_endpoint = `https://api.giphy.com/v1/gifs/trending?api_key=${giphy_api_key}`;

fetch(trending_endpoint)
  .then(api_res => api_res.json())
  .then(api_output => {
    const trending_gifs_array = api_output.data.map(
      gif => gif.images.fixed_width.url
    );
    const trending_gifs = trending_gifs_array
      .map(gif => `<a onclick="share('${gif}')"><img src=${gif} alt="trending gifs"></a>`)
      .join();
    document.getElementById("trending_gifs").innerHTML = trending_gifs;

  })
  .catch(err => console.log(err));

  // displaying name of searched gif 
 function myFunction(){
   var x = document.getElementById("gifs").value;
   document.getElementById("searched_element").innerHTML =  x;
   document.getElementById("gifs").value = '';
 }

// tried out webshare api
const title = window.document.title;
const url = window.document.location.href;

document.getElementById("logo_share").addEventListener('click', ()=>{
  if(navigator.share){
    navigator.share({
      title: `${title}`,
      url: `${url}`
    }).then(() =>{
      console.log('thanks for sharing');
    })
  }
})
const titlex = window.document.title;
function share(urlx){
  if(navigator.share){
    navigator.share({
      title: `${title}`,
      url: `${urlx}`,
      text: 'Search and share GIFs through Gify-Re',
    }).then(() =>{
      console.log('thanks for sharing');
    })
  }
}