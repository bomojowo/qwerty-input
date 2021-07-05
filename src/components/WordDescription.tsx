import { hasAVowel } from "../utils/hasAVowel";
//import { hasASymbol } from "../utils/hasASymbol";
import { isStrongInput} from "../utils/isStrongInput"

interface WordDescriptionProps {
  wordToDescribe: string;
}

function WordDescription({
  wordToDescribe,
}: WordDescriptionProps): JSX.Element {
  // const hasAtLeastFiveCharacters = wordToDescribe.length > 5;
  const containsAVowel = hasAVowel(wordToDescribe);
  const impressivelyStrong = isStrongInput(wordToDescribe)
  const hasTheLetterQ = wordToDescribe.toLowerCase().match("q");
  // const containsASymbol = hasASymbol(wordToDescribe);
  // const hasAtLeastSevenChar = wordToDescribe.length > 7;
  // const hasAtLeastOneLowerCase = wordToDescribe.toLocaleLowerCase;
  // const hasAtLeastOneUpperCase = wordToDescribe.toLocaleUpperCase;
  console.log(impressivelyStrong)

  return (
    <ul>
      {/* {hasAtLeastFiveCharacters && <li>Has at least five characters</li>} */}
      {containsAVowel && <li>Contains a vowel</li>}
      {hasTheLetterQ && <li>Contains the letter Q</li>}
      {/*{containsASymbol && <li>Contains a symbol</li>}
      {containsASymbol &&
        hasAtLeastSevenChar &&
        hasAtLeastOneLowerCase &&
        hasAtLeastOneUpperCase && <li>Impressively strong Input</li>} */}
        {impressivelyStrong && <li>Impressively Strong Input</li>}
        
    </ul>
    
  );
  
}

export default WordDescription;
