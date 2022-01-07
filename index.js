/* My Map Function 
Iterates over the collection of elements, 
passing each element in turn to the callback function. 
Returns the original, unmodified, collection */

const standardizeInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }

function myEach(collection, callBack){
    const newCollection = standardizeInput(collection)
    newCollection.forEach(collect => {
        callBack(collect)
        
    })
    
    return collection
}



function myMap(collection, callBack) {
    const newCollection = standardizeInput(collection)
   const map = newCollection.map(collect => {
      return  callBack(collect)
    })
      return map    
    
}


function myReduce(collection, callback, acc = null) {


    const newCollection = standardizeInput(collection)

    if (acc === null) {
        acc = newCollection[0]
        let otherCollection = newCollection.slice(1)
        otherCollection.forEach(value => {
            acc = callback(acc, value, collection) })
            return acc 
    } else {

     newCollection.forEach(value => {
        acc = callback(acc, value, collection)  
    })
        return acc 
}

    
}

function myFind(collection, predicate) {

    const newCollection = standardizeInput(collection)

    let ret = undefined;

    newCollection.every(e => {
        if(predicate(e))
        {
            ret = e;
            return false;
        }
        return true;
    })

    return ret;
}

function myFilter(collection, predicate) {

    const newCollection = standardizeInput(collection)
    let retCollection = []

    newCollection.forEach(e => {
        if(predicate(e))
        {
            retCollection.push(e)
        }
    })

    return retCollection;
}


function mySize(collection) {
    return myReduce(collection, function(acc, val) { return acc + 1 }, 0);
}



function myFirst(array, n = null) {
   
        if (n === null) {
            return array[0]
        } else {
            let ret = []
            for (let i = 0; i < Math.min(array.length, n); i++) {
                ret.push(array[i]);
            }
            return ret;
        }
    
}


function myLast(array, n = null) {

    const l = array.length
   
    if (n === null) {
        
        return array[l - 1]
    } else {
        let ret = []
            for (let i = Math.max(array.length - n, 0); i < array.length; i++) {
                ret.push(array[i]);
            }
            return ret;
    }
}






