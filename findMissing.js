function findMissing(array){
    array.sort(); //sort array for easy search
    let missingNumber
    for(let i = 1; i < array.length; i++){
        if(array[i]-array[i-1] == 2){ //check if there missing number
           missingNumber = array[i] - 1
        }
    }
    if(missingNumber == undefined){ //if there is no sequence
        missingNumber = 'No sequence found'
    }
    return missingNumber
}

module.exports = findMissing