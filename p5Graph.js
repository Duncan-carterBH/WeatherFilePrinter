function p5Graph(jsonIn) {
	
	var data; 
	
	function preload(){
	
	//url = "https://raw.githubusercontent.com/dariusk/corpora/master/data/governments/mass-surveillance-project-names.json";
	data = loadJSON(jsonIn);
	
	
	
	}
	
	function setup(){
	
		/* createCanvas(displayWidth,400); */
		//var programme = data.programme;
		var place = data._location;
		createP(place);
	/* 	lengths = [programme.length];
			for (var i = 0; i < programme.length; i++){
				createElement('h2',programme[i].Name);
				lengths[i] = programme[i].Name.length;
				//var names = programme[i].Name;
				
			}
		createElement('h3',lengths); */
		noLoop();
	}

	
}