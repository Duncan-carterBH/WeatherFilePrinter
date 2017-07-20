//This code uses p5.js, beware

var data;
var url;
var lengths;
function preload(){
	
	url = "https://raw.githubusercontent.com/dariusk/corpora/master/data/governments/mass-surveillance-project-names.json";
	data = loadJSON(url);
	
	
	
}

function setup(){
	
	createCanvas(displayWidth,400);
	//var programme = data.programme;
	var programme = data.projects;
	//createP(programme);
	lengths = [programme.length];
	for (var i = 0; i < programme.length; i++){
		createElement('h2',programme[i].Name);
		lengths[i] = programme[i].Name.length;
		//var names = programme[i].Name;
		
	}
	createElement('h3',lengths);
	noLoop();
}

function draw(){
	
	for (var i = 0; i < lengths.length; i++){
		
		rect(0.9*i*(displayWidth/lengths.length),200,20,lengths[i]);
		
	}
	
}

