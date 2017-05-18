module.exports = findMissing; function findMissing(arr1,arr2){
     arr1 = arr1;
     arr2 = arr2;
    let missing = []; 
    if (arr1.length === arr2.length){
        
        missing.push(0);
        missing = parseInt(missing.join());
    }
    else{
        for(let i = 0; i < arr2.length; i++){
        	
           if(arr1.indexOf(arr2[i]) === -1){
            missing.push(arr2[i]);
            missing = parseInt(missing.join());
            }
        }
        
    }
 return missing;
}