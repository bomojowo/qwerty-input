
export function hasAnUpperCase(word: string): boolean{
    const hasAtLeastOneUpperCase = /[A-Z]/.test(word); // checks if word contains any lowercases
    console.log('hello',hasAtLeastOneUpperCase)
    return hasAtLeastOneUpperCase
}
