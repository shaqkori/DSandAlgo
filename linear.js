function linearsearch (args, target) {

    for  (let i = 0; i < args.length; i++){
        
        if(args[i] === target){
            return i 
        }
        
        
        
    }
    return -1
    
}




console.log(linearsearch([1,2,3,4,5], 5))