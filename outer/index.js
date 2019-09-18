import { testGetting, testSetting } from "./src/outerfunction"
import {innerClass} from "inner";
import { setUniversal, getUniversal } from "mylibrary";


const innert = new innerClass();
innert.setLibrary({setUniversal, getUniversal});
innert.trySet(5);
console.log(innert.tryGet());

console.log(testGetting());

testSetting(15);
console.log(testGetting());

console.log(innert.tryGet());