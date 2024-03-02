function longestprefix(values){
    
    let res =""

    if (values.length === 0 ){
        return ''
    }

    for (let i = 0; i < values[0].length; i++){
        const character = values[0][i]
        for (let j = 0; j< values.length; j++ ){

            if (values[j][i] !== character ) {
                return res

            }

            

        }
        res = res + character 

        
    }
    return res
}