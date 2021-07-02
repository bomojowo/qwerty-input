export function hasASymbol(word: string): boolean{
    const symbols = ['£', '?', '!']
    for(const character of word){
        if(symbols.includes(character)){
            return true
        }
    }
    return false
}