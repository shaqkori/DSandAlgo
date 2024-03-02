function palnumber (num){
    const strNum = num.toString();

    
        const char = strNum.split('')
        const middle = strNum.length/2
        for (let i = 0; i< middle; i++ ){
            frontchar = char[i]
            lastchar = char[strNum.length - 1 -i ]

            if (frontchar !== lastchar){
                return false
                
            }

            
        }

        return true
    }



console.log(palnumber(121))