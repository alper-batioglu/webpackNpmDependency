import { setUniversal, getUniversal } from "mylibrary";


function testSetting(value){
    setUniversal(value);   
}

function testGetting(){
    return getUniversal();
}

export {testGetting, testSetting}