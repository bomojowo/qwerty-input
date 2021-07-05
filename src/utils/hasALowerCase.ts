
export function hasALowerCase(word: string): boolean{
    const hasAtLeastOneLowerCase = /[a-z]/.test(word); // checks if word contains any lowercases
    return hasAtLeastOneLowerCase
}