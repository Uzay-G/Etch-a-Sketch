// Define variables
let div;
let column;
let row;
//Define number of columns and grids
let fraction;   
// Function that builds grid and decides number of squares per side
function buildGrid(sides) {
    $("#container").empty();  
    fraction = ""
    //Stores global variable of squares per side
    previous = sides;
    // Divide grid sides into columns
    for (let y = 1; y <= sides; y++) {fraction += "1fr "}
    fraction += " / "
    for (let y = 1; y <= sides; y++) {fraction += "1fr "}
    $("#container").css({"grid-template": fraction})
    // Create grid depending on squares per side
    for (let x = 0; x <= sides; x++) {
        for (let i = 0; i <= sides; i++) {
     div = document.createElement("div");
     column = i + " / " + i;
     row = x + " / " + x;
     $("#container").append(div);
     $(div).css({"grid-column": column, "grid-row": row })
        }
}
}
// initial grid
buildGrid(80)
// Create new grid depending on squares per side
function render() {  
    let squares = Number(prompt("Change the thickness of the sketch traits. The higher you enter, the finer the trait will be. If you enter a small number, the trait will be larger.")) 
    console.log(squares)
    if((!isNaN(parseFloat(squares)) && isFinite(squares)) == false){
        alert("Please only enter numeric characters")
      }  
    else {
        buildGrid(squares)
    }
}
//Erase sketch
$("#eraser").click(function() {
buildGrid(previous)
})