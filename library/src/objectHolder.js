let objectHolderInst = null;
function getObjectHolder(){
    return objectHolderInst || (objectHolderInst = new objectHolder());
}

function objectHolder(){
    this.holder = {};
}

objectHolder.prototype.getObject = function(objName){
    return this.holder[objName];
}

objectHolder.prototype.setObject = function(objName, objValue){
    this.holder[objName] = objValue
}

export {getObjectHolder}