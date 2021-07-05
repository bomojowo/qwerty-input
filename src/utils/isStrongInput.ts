import { isMoreThanSevenChar } from "./isMoreThanSevenChar";
import { hasAnUpperCase } from "./hasAnUpperCase";
import { hasALowerCase } from "./hasALowerCase";

export function isStrongInput(word: string): boolean{
    if(isMoreThanSevenChar(word) === true && hasAnUpperCase(word) === true && hasALowerCase(word) ===true){
        return true
    }
    return false
}
