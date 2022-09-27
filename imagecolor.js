var myId;
var x =document.getElementById(myId);

function allowDrop(eve) {
    eve.preventDefault() ;
}   
function DragStart(eve) {
    myId = eve.target.id ;
}

function drop(eve){
    eve.target.append(document.getElementById(myId))
}