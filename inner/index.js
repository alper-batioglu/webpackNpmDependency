import { testGetting, testSetting } from "./src/innerfunction"
import { getObjectHolder } from "mylibrary";

function innerClass(){

}

innerClass.prototype.tryGet = function(){
    return testGetting();
}

innerClass.prototype.trySet = function(value){
    testSetting(value);
}

innerClass.prototype.setLibrary = function(obj){
    getObjectHolder().setObject("lib", obj);
}

export {innerClass}