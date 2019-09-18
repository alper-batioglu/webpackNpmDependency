import { getObjectHolder, setUniversal, getUniversal } from "mylibrary";

function testSetting(value){
    const libObj = getObjectHolder().getObject("lib");
    //libObj.setUniversal(value);
    setUniversal(value);
}

function testGetting(){
    const libObj = getObjectHolder().getObject("lib");
    //return libObj.getUniversal();
    return getUniversal();
}

export {testGetting, testSetting}