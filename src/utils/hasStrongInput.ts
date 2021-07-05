import { isStrongInput } from "./isStrongInput"

export function hasStrongInput(word: string): boolean {
    for(const character of word){
        if(isStrongInput(character)) {
    return true;
        }
    }
   return false
}
