var apiurl = "http://www.omdbapi.com/?apikey=345660a5";



async function getdata()
{

    try {
		let keyword = document.getElementById('search').value;
		// let year = document.getElementById('y').value;
		// var e = document.getElementById('p');
		// console.log(e);
        // var value = e.options[e.selectedIndex].value;
		// console.log("value",value);
        // var text = e.options[e.selectedIndex].text;
		// console.log("text",text);
		var response = await fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q="+keyword+"&pageNumber=1&pageSize=20&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null", {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
				"x-rapidapi-key": "1b2390d925mshe2e632937d32b9dp10381ejsn3a3540128cb3"
			}
		});
		var movie = await response.json()
		console.log(movie)
		console.log(movie.value);

		if(movie.Response != 'False')
		{
        createPost(movie);
		}
		// else 
		// {
		// document.getElementById('message').style.visibility= 'visible';
		// setTimeout(()=>{
		// 	document.getElementById('message').style.visibility= 'hidden';
		// },5000);
		 
		// }
		// if(movie)
		//     document.getElementsByClassName('card').style.property= 'visible';
	  } catch (err) {
		console.error(err)
	  }

}

// function resetFields()
// {
// 	document.getElementById('t').value = '';
// 	document.getElementById('y').value = '';
// 	document.getElementById('p').selectedIndex = '';
// }

function createPost(movie)
{ 
	var fragment  = new DocumentFragment();
   
 for(let i=0;i<movie.value.length;i++)
 {
	var frag = new DocumentFragment();
	var fragDivs = document.createElement("div");

	 var newDiv = document.createElement("div");
	 newDiv.id = 'r'+i;
     newDiv.className = 'blocks';
	//  newDiv.style.display = 'block';
	newDiv.style.display = 'block';
	
	

	 var providerDiv = document.createElement("div");
	 providerDiv.id = 'provider'+i;
	 providerDiv.className = 'Providers';
	 providerDiv.innerHTML = movie.value[i].provider.name;
	//  var newProvspan = document.createElement("span");
	//  providerDiv.appendChild(newProvspan);
	
	
	//  var providerName = document.createElement("span");
    //  providerName.className = 'providerNm';
	//  providerName.innerHTML = movie.value[i].provider.name;
	//  providerDiv.appendChild(providerImg);
	//  providerDiv.appendChild(providerName);
	 frag.appendChild(providerDiv);

	 var titleDiv = document.createElement("div");
	 titleDiv.id = 'title'+i;
	 titleDiv.className = 'titles';
	 titleDiv.innerHTML = movie.value[i].title;
	 frag.appendChild(titleDiv);

     var descriptionDiv = document.createElement("div");
	 descriptionDiv.id =  'description'+i;
	 descriptionDiv.className = 'descriptions';
	 descriptionDiv.innerHTML = movie.value[i].description;
	 frag.appendChild(descriptionDiv);
     newDiv.appendChild(frag);

	 var newDiv1 = document.createElement("div");
	 newDiv1.id = 'right'+i;
     newDiv1.className = 'blocks1';
	 newDiv1.style.display = 'block';

	 var providerImg = document.createElement("img");
	 providerImg.id = 'providerImg'+i;
	 providerImg.className = 'providerImg';
     providerImg.src = movie.value[i].image.url;

	 newDiv1.appendChild(providerImg);
     fragDivs.append(newDiv,newDiv1);

	 fragDivs.id = 'SideBySide';
	//  fragDivs.style.display ='flex';
	fragment.appendChild(fragDivs);
	 
 }

 document.getElementById('target').appendChild(fragment);
//  for(var i =1; i<= movie.value; i++){
// 	$('#target').append('<div id="r'+ i +'" class="ansbox"></div>')
//   }
// 	document.getElementById('display').style.visibility= 'visible';
// 	document.getElementById('display').style.display = 'flex';
// 	var img = document.getElementById('poster')
// 	img.src = movie.Poster;

// 	document.getElementById("name").innerHTML = movie.Title;
// 	document.getElementById("dir").innerHTML = movie.Director;
// 	document.getElementById("year").innerHTML = movie.Year;
// 	document.getElementById("genre").innerHTML = movie.Genre;
// 	document.getElementById("plot").innerHTML = movie.Plot;
//     document.getElementById("imdb").innerHTML = movie.imdbRating;
// 	document.getElementById("actors").innerHTML = movie.Actors;
// }

// function animateScroll(id) {
// 	$('html, body').animate({
// 	  scrollTop: ($(`#${id}`).offset().top - 50)
// 	}, 800);
//   }

}
