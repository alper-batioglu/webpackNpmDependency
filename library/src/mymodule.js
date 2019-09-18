var universal;

function setUniversal(uni){
    const backup = uni;
    debugger;
    universal = uni;
    return function(){
        universal = backup;
    }
}

function getUniversal(){
    debugger;
    return universal;
}


export {setUniversal, getUniversal}