var ruckerSlider, genaeSlider, bakerSlider;

function setup(){
    createCanvas(600,400);
    background(0);
    
    ruckerSlider = createSlider(0.255,120);
    ruckerSlider.position(20,20)
     
     ganaeSlider = createSlider(0.255,120);
    genaeSlider.position(20,50)
    
     bakerSlider = createSlider(0.255,120);
    bakerSlider.position(20,80)
}

function draw(){
    redCreep = ruckerSlider.value();
    greenSavage = genaeSlider.value();
    bluekiller = bakerSlider.value();
    
    background(redCreep,greenSavage,bluekiller)
}