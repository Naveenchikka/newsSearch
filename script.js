
var movie,keyword;


$('.SearchBar').on('keydown', 'input', function(e) {
	if (e.keyCode === 13) {
	  e.preventDefault();
		e.stopImmediatePropagation();
	  //Do your stuff...
	  getdata();
	}
  });

async function getdata()
{

    try {
		keyword = document.getElementById('search').value;
		var response = await fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q="+keyword+"&pageNumber=1&pageSize=20&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null", {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
				"x-rapidapi-key": "1b2390d925mshe2e632937d32b9dp10381ejsn3a3540128cb3"
			}
		});
		movie = await response.json()
		console.log(movie)
		console.log(movie.value);
		console.log("status = "+movie.statuscode);

		if(movie.Response != 'False')
		{
        createPost(movie);
		}
	  } catch (err) {
		console.error(err);
		document.getElementById('err').innerHTML = "Server Error, Please search again";
	  }

}


function dosomeFunction()
{
  createPost(movie);
}

function createPost(movie)
{ 
	document.getElementById('err').style.display = 'hidden';
    document.getElementById('key').innerHTML = "News About "+keyword;
	var fragment  = new DocumentFragment();
   
 for(let i=0;i<movie.value.length;i++)
 {
	var frag = new DocumentFragment();
	var fragDivs = document.createElement("div");

	 var newDiv = document.createElement("div");
	 newDiv.id = 'r'+i;
     newDiv.className = 'blocks .col-md';
	//  newDiv.style.display = 'block';
	newDiv.style.display = 'block';
	
	

	 var providerDiv = document.createElement("div");
	 providerDiv.id = 'provider'+i;
	 providerDiv.className = 'Providers';
	 providerDiv.innerHTML = movie.value[i].provider.name;
	
	 frag.appendChild(providerDiv);

	 var titleDiv = document.createElement("a");
	 titleDiv.id = 'title'+i;
	 titleDiv.className = 'titles';
	 titleDiv.innerHTML = movie.value[i].title;
	 titleDiv.style.cursor = 'pointer';
	 titleDiv.href = movie.value[i].url;
	 titleDiv.target = "_blank";
	 frag.appendChild(titleDiv);

     var descriptionDiv = document.createElement("div");
	 descriptionDiv.id =  'description'+i;
	 descriptionDiv.className = 'descriptions';
	 descriptionDiv.innerHTML = movie.value[i].description;
	 frag.appendChild(descriptionDiv);
     newDiv.appendChild(frag);

	 var newDiv1 = document.createElement("div");
	 newDiv1.id = 'right'+i;
     newDiv1.className = 'blocks1 .col-sm';
	 newDiv1.style.display = 'block';

	 var providerImg = document.createElement("img");
	 providerImg.id = 'providerImg'+i;
	 providerImg.className = 'providerImg';
     providerImg.src = movie.value[i].image.url;
     
	 
	 newDiv1.appendChild(providerImg);
     fragDivs.append(newDiv,newDiv1);

	 fragDivs.id = 'SideBySide';
	 fragDivs.className = 'card w-75';
	//  fragDivs.style.display ='flex';
	fragment.appendChild(fragDivs);
	 
 }

 document.getElementById('target').appendChild(fragment);

}


