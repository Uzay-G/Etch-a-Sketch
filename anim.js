// Define variables
let div;
let column;
let row;
let color;
var defaultColor = "purple";
//Define number of columns and grids
let fraction;   
// Function that builds grid and decides number of squares per side
function buildGrid(sides) {
    $("#container").empty(); 
    // Design hover effect
    if (defaultColor == "purple") {  
    var css = "#container > *:hover, #container > *:active { background: #553c8b; transition:0s;}";
    }
    else {
        var css = "#container > *:hover, #container > *:active{ background: white; transition:0s;}";
    }
    var style = document.createElement('style');
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
    style.appendChild(document.createTextNode(css));
}
    document.getElementsByTagName('head')[0].appendChild(style);    
    //Stores global variable of squares per side
    previous = sides;
    let fraction = "1fr "
    // Divide grid sides into columns
    $("#container").css({"grid-template-rows": fraction.repeat(sides)})
    $("#container").css({"grid-template-columns": fraction.repeat(sides)})
    // Create grid depending on squares per side
    for (let x = 0; x <= sides; x++) {
        for (let i = 0; i <= sides; i++) {
     div = document.createElement("div");
     column = i + " / " + i;
     row = x + " / " + x;
     $("#container").append(div);
     $(div).css({"grid-column": column, "grid-row": row })
        }
}}
// initial grid
buildGrid(80)
// Create new grid depending on squares per side
function render() {  
    let squares = Number(prompt("Decide how many squares you want on each side of the grid.")) 
    //Make sure input is numeric
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
//Style blackboard mode
function styleIt() {
    defaultColor = "white";
    buildGrid(previous)
    $("#descript").hide()
    $("#container > *").css({"border": "none"})
    $('body').css({"background": "white"})
    $('#container').css({"background": "black"})
    $("#blackboard").html("Classic")
    $('button').css({"color": "black"})
    $("#titles").fadeIn();
    $("#container").css({"border": "7px outset brown"})
    //Make button click cause return to classic mode
    $("#blackboard").attr("onclick","revert()");
}
// Revert to Classic mode
function revert() {
    defaultColor = "purple";
    buildGrid(previous)
    $("#container > *").css({"border": "border: 1px solid rgba(0, 0, 0, 0.2);"})
    $('body').css({"background": "#ccc1ff"})
    $('#container').css({"background": "#ffeafe"})
    $("#blackboard").html("Black Board")
    $("#titles").fadeOut();
    $("#container").css({"border": "none"})
    $("#blackboard").attr("onclick","styleIt()");
}
