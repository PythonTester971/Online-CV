
//Affiche à côté du nom son code binaire au "mousemove"

function getCursorElement(){

    let cursor = document.querySelector('#cursor');

    return cursor;

}

function toggleBin(){

    let geolineDenisseBin = document.querySelector('#author-bin');

    geolineDenisseBin.classList.toggle("displayInline"); 

}



cursor.addEventListener('mousemove', function() {

    
    toggleBin();


});


