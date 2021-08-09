const api= '&api_key=4bc21d3df69b28e4577bcb4e747bd00e';
const base_url='https://api.themoviedb.org/3/';
const upper_genres='discover/movie?with_genres=';
const lower_generes='&sort_by=popularity.desc&vote_count.gte=10';
const images_base_url='https://image.tmdb.org/t/p/w500';
const lang='&language=hi';
const main = document.getElementById('main');

  function majekro()
  {
    var favoritemovie = sessionStorage.getItem("favoriteMovie");
    if(favoritemovie=="images1"||favoritemovie=="link1")
    {
      var id="9648";
    }
    if(favoritemovie=="images2"||favoritemovie=="link2")
    {
      var id="18";
    }
    if(favoritemovie=="images3"||favoritemovie=="link3")
    {
      var id="53";
    }
    if(favoritemovie=="images4"||favoritemovie=="link4")
    {
      var id="10749";
    }
    if(favoritemovie=="images5"||favoritemovie=="link5")
    {
      var id="27";
    }
    if(favoritemovie=="images6"||favoritemovie=="link6")
    {
      var id="99";
    }
    if(favoritemovie=="images7"||favoritemovie=="link7")
    {
      var id="878";
    }
    if(favoritemovie=="images8"||favoritemovie=="link8")
    {
      var id="28";
    }
    if(favoritemovie=="images9"||favoritemovie=="link9")
    {
      var id="35";
    }
    if(favoritemovie=="images10"||favoritemovie=="link10")
    {
      var id="14";
    }
    if(favoritemovie=="images11"||favoritemovie=="link11")
    {
      var id="12";
    }
    if(favoritemovie=="images12"||favoritemovie=="link12")
    {
      var id="10751";
    }
    var url=base_url+upper_genres+id+lower_generes+api;
      console.log(url);
      fetch(url)
          .then(res => {return res.json()})
          .then(data => movie_dikha_bhosdike(data.results))

  }

  function movie_dikha_bhosdike(resul){ 
      
        console.log(resul);
        console.log(resul[0].poster_path);
        //main.innerHTML=``;
        document.querySelector('#main').innerHTML='';
         resul.forEach(movie => {
             const {title,overview,poster_path,vote_average}=movie
             const movieE1 = document.createElement('div');
             movieE1.classList.add('movie');
             movieE1.innerHTML=`
             <images id="goku" src="${images_base_url+poster_path}" alt="${title}">
             <p id="title">Title : ${title}</p>
             <p id="rating">Rating : ${vote_average}</p>
             <div id="overview"><h3>Overview</h3>${overview}</div>
            
             `
             main.appendChild(movieE1)
         });
  }
  
 
  majekro();
