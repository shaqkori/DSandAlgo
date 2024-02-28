function palindrome (str){
    
    word = str.trim().toLowerCase()
    if (word.length % 2 !== 0 ){
        return false;
    }

    else {
        const characters = word.split('')
        const middle = word.length /2;
        for (i = 0; i < middle; i++){
            const frontchar = characters[i]
            const lastchar = characters[word.length - 1 - i];

            if (frontchar === lastchar){


            }

            else{
                return false 
            }
        }

        return true 


    }
}

console.log(palindrome('voaaov'))